package com.revature.backend.service;

import com.revature.backend.entity.AppointmentEntity;
import com.revature.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.security.RolesAllowed;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Override
    @RolesAllowed(value = {"user_role"})
    public void viewAllAppointments(int appointmentId) {
        appointmentRepository.findAll();
    }
}
