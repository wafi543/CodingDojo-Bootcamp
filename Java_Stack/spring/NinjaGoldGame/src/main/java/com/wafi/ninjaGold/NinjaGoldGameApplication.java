package com.wafi.ninjaGold;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@Controller
public class NinjaGoldGameApplication {

	public static void main(String[] args) {
		SpringApplication.run(NinjaGoldGameApplication.class, args);
	}
	
	@RequestMapping("/")
	public String index (HttpSession session, Model model) {
		model.addAttribute("activities", session.getAttribute("activities"));
		return "index.jsp";
	}
	
	private static int getRandomNumberInRange(int min, int max) {

		if (min >= max) {
			throw new IllegalArgumentException("max must be greater than min");
		}

		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}
	
	@SuppressWarnings("unchecked")
	@RequestMapping(value="/process_money", method=RequestMethod.POST)
	public String process (@RequestParam(value="building") String building, HttpSession session) {
		ArrayList<String> activities = new ArrayList<String>();
		if (session.getAttribute("activities") != null) {
			activities = (ArrayList<String>) session.getAttribute("activities");
		}
		int num = 0;
		if (building.equals("farm")) {
			num = getRandomNumberInRange(10 , 20);
		}else if (building.equals("cave")) {
			num = getRandomNumberInRange(5 , 10);
		}else if (building.equals("house")) {
			num = getRandomNumberInRange(2 , 5);
		}else if (building.equals("casino")) {
			num = getRandomNumberInRange(-50 , 50);
		}
		
		if (num >= 0) {
			activities.add("Earned "+num+" gold from the " + building + "! ("+new Date()+")");
		}else {
			activities.add("Earned a casino and lost "+num+" golds... ouch.. ("+ new Date() +")");
		}
		
		return "redirect:/";
	}
	
	@RequestMapping("/clear")
	public String clear (HttpSession session) {
		session.removeAttribute("activities");
		return "redirect:/";
	}

}
