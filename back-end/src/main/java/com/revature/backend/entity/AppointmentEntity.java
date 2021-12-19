package com.revature.backend.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "appointments")
@AllArgsConstructor
@NoArgsConstructor
@Data
@JacksonXmlRootElement
public class AppointmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String serviceName;
    private Date appointmentTime;
    @ManyToOne
    @JoinColumn(name = "appointment_id")
    @JsonIgnore
    private User user;

//    @Enumerated(EnumType.STRING)
//    private AppointmentTime appointmentTime;

}
