package com.kugan.rentcloud.customerservice.service;

import java.util.List;

import com.kugan.rentcloud.model.customer.Customer;

public interface CustomerService {
	Customer save(Customer customer);
	Customer findById(int id);
	List<Customer> findAll();
}
