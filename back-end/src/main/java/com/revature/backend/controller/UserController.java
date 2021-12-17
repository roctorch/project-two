package com.revature.backend.controller;

import com.revature.backend.controller.payload.HttpResponseBody;
import com.revature.backend.entity.User;
import com.revature.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(
            method = RequestMethod.POST,
            value = "/users"
    )
    public ResponseEntity<?> doPost(@RequestBody User user) {
        userService.register(user);
        HttpResponseBody responseBody = new HttpResponseBody("registration successful");
        return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
    }
}
