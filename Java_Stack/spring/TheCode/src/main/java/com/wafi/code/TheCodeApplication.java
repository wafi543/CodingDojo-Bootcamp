package com.wafi.code;

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
public class TheCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(TheCodeApplication.class, args);
	}
	
	@RequestMapping("/")
	public String index (Model model, HttpSession session) {
		if (session.getAttribute("error") != null) {
			boolean error = (boolean) session.getAttribute("error");
			model.addAttribute("error", error);
		}else {
			
		}
		session.removeAttribute("error");
		return "index.jsp";
	}
	
	@RequestMapping (value = "/process", method=RequestMethod.POST)
	public String process (@RequestParam(value="code") String code, HttpSession session) {
		if (code.equals("bushido")) {
			return "redirect:/code";
		}else {
			session.setAttribute("error", true);
			return "redirect:/";
		}
	}
	
	@RequestMapping("/code")
	public String code () {
		return "code.jsp";
	}


}
