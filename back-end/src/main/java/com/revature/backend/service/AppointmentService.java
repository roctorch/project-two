package com.revature.backend.service;

import com.revature.backend.entity.AppointmentEntity;

import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentService {

    void updateAppointment(AppointmentEntity appointment);

    void deleteAppointmentById(int appointmentId);

    AppointmentEntity getAppointmentById(int id);

    List<AppointmentEntity> getAllAppointments();

    List<AppointmentEntity> getAppointmentByUserId(int userId);

    boolean isAvailable(int serviceId, int userId, LocalDateTime start);
}
