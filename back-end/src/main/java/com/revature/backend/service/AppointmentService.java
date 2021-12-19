package com.revature.backend.service;

import com.revature.backend.entity.AppointmentEntity;

import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentService {

    void viewAllAppointments(int appointmentId);

//    void deleteAppointmentById(int appointmentId);
//
//    AppointmentEntity getAppointmentById(int id);

//    List<AppointmentEntity> viewAllAppointments();
//
//    List<AppointmentEntity> getAppointmentByUserId(int userId);
//
//    boolean isAvailable(int serviceId, int userId, LocalDateTime start);
}
