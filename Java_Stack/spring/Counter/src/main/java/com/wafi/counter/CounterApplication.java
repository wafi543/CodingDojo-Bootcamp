package com.wafi.counter;

import javax.servlet.http.HttpSession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class CounterApplication {

	public static void main(String[] args) {
		SpringApplication.run(CounterApplication.class, args);
	}
	
	@RequestMapping("/")
	public String index (HttpSession session) {
		int count = 0;
		var countS = session.getAttribute("count");
		if (countS != null) {
			count = (int) countS;
			count++;
		}
		session.setAttribute("count", count);
		return "index.jsp";
	}
	
	@RequestMapping("/counter")
	public String counter (HttpSession session, Model model) {
		int count = 0;
		var countS = session.getAttribute("count");
		if (countS != null) {
			count = (int) countS;
		}
		model.addAttribute("count", count);
		return "counter.jsp";
	}
}
