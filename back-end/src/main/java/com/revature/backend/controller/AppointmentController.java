package com.revature.backend.controller;


import com.revature.backend.service.AppointmentService;
import com.revature.backend.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/schedule")
public class AppointmentController {

    private final UserService userService;
    private final AppointmentService appointmentService;

    public AppointmentController(UserService userService, AppointmentService appointmentService) {
        this.userService = userService;
        this.appointmentService = appointmentService;
    }
}
