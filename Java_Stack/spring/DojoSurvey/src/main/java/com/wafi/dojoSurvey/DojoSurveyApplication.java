package com.wafi.dojoSurvey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@Controller
public class DojoSurveyApplication {

	public static void main(String[] args) {
		SpringApplication.run(DojoSurveyApplication.class, args);
	}
	
	@RequestMapping("/")
	public String index () {
		return "index.jsp";
	}
	
	@RequestMapping(value="/result", method=RequestMethod.POST)
	public String result (@RequestParam(value="name") String name, @RequestParam(value="location") String location, @RequestParam(value="language") String language, @RequestParam(value="comment") String comment, @RequestParam(value="os") String os, @RequestParam(value="platforms") String platforms, Model model) {
		model.addAttribute("name", name);
		model.addAttribute("location", location);
		model.addAttribute("language", language);
		model.addAttribute("comment", comment);
		model.addAttribute("os", os);
		model.addAttribute("platforms", platforms);
		return "result.jsp";
	}

}
