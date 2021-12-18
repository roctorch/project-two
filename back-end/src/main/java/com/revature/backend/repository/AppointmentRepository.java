package com.revature.backend.repository;

import com.revature.backend.entity.AppointmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AppointmentRepository extends JpaRepository<AppointmentEntity, Integer> {

    @Query("SELECT a FROM appointments WHERE a.customer_id = :customerId")
    List<AppointmentEntity> findByCustomerId(@Param("customerId") int customerId);
}
