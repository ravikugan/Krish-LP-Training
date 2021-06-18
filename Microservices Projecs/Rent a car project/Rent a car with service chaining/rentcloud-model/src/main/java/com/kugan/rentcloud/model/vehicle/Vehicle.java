package com.kugan.rentcloud.model.vehicle;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "vehicle")
@Data
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    String make;
    String model;
    String type;
    int year;
    int odometerValueOnRegister;
    String color;
	
	
}
