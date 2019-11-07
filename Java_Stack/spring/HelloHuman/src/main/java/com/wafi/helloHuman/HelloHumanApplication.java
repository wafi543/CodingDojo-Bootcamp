package com.wafi.helloHuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
@RestController
public class HelloHumanApplication {

	public static void main(String[] args) {
		SpringApplication.run(HelloHumanApplication.class, args);
	}
	
	@RequestMapping("/")
	public String hello(@RequestParam(value="q", required=false) String searchQuery) {
        if (searchQuery == null) {
        	return "Hello Human!";
        }else {
        	return "Hello " + searchQuery+"!";
        }
    }
	
}
