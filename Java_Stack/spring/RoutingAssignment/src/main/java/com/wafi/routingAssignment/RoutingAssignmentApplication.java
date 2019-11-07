package com.wafi.routingAssignment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RoutingAssignmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoutingAssignmentApplication.class, args);
	}
	@RequestMapping("/coding")
	public String coding () {
		return "Hello Coding Dojo!";
	}
	
	@RequestMapping("/coding/python")
	public String python () {
		return "Python/Django was awesome!";
	}
	@RequestMapping("/coding/java")
	public String java () {
		return "Java/Spring is better!";
	}
}
