package com.cg.vaccine.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
	@GetMapping("/")
	public String home() {
		return ("hello");
	}
	@GetMapping("/user")
	public String user() {
		return ("hello user");
	}
	@GetMapping("/admin")
	public String admin() {
		return ("hello admin");
	}
}
