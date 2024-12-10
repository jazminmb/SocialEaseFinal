package com.socialease.controller;

import com.socialease.model.User;
import com.socialease.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        if (userService.registerUser(user)) {
            return "User registered successfully!";
        }
        return "Password mismatch or other issue!";
    }

    @PostMapping("/login")
    public String loginUser(@RequestParam String email, @RequestParam String password) {
        User user = userService.authenticateUser(email, password);
        if (user != null) {
            return "Login successful!";
        }
        return "Invalid email or password!";
    }
}
