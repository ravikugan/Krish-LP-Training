package com.kugan.rentcloud.model.customer;

import java.util.List;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "customer")
@Data
public class Customer {
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    private String firstName;
    private String lastName;
    private String dlNumber;
    private String zipcode;
    @OneToMany(mappedBy = "customer")
    private List<Loyality> loyalities;
	
	
	
}
