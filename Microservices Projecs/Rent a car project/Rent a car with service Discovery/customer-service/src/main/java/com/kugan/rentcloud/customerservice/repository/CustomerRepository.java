package com.kugan.rentcloud.customerservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kugan.rentcloud.model.customer.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
