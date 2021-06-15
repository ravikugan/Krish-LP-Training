package com.kugan.rentcloud.profileservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kugan.rentcloud.commons.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
