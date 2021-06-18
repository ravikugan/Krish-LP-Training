package com.kugan.rentcloud.model.customer;

import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name="loyality")
@Data
public class Loyality {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int transactionId;
    @ManyToOne
    @JoinColumn
    Customer customer;
    int point;
    LocalDateTime expireDate;
}
