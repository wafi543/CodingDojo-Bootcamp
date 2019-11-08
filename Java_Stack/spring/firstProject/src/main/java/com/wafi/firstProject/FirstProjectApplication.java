package com.wafi.firstProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@Controller
public class FirstProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstProjectApplication.class, args);
	}
	
	@RequestMapping("/")
	public String index (Model model) {
		model.addAttribute("name", "Wafi");
		return "index.jsp";
	}
	
	@RequestMapping("/random")
	public String random () {
		return "Spring Boot is great! So easy to just respond with strings";
	}
}
