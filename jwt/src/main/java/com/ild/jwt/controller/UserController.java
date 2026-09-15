package com.ild.jwt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ild.jwt.entity.User;
import com.ild.jwt.service.UserService;

import jakarta.annotation.PostConstruct;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostConstruct
	public void initRolesAnsUsers() {
		userService.initRolesAndUser();
	}
	
	@PostMapping({"/registerNewUser"})
	public User registerNewUser(@RequestBody User user) {
		return userService.registerNewUser(user);
	}
	
	@GetMapping({"/forAdmin"})
	public String forAdmin() {
		return "This URL is only accessible to admin";
	}
		
	@GetMapping({"/forUser"})
	public String forUser() {
		return "This URL is only accessible to the user";
	}
		
}
