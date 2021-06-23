package com.kugan.rentcloud.model.rent;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name="entity")
@Data
public class Rent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int rentId;
    int customerId;
    int vehicleId;
    LocalDateTime rentFrom;
    LocalDateTime rentTill;
    int currentOdometer;
    String returnLocation;
}
