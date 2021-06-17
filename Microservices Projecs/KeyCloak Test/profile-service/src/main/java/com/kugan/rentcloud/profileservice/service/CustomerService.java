package com.kugan.rentcloud.profileservice.service;

import java.util.List;

import com.kugan.rentcloud.commons.model.Customer;

public interface CustomerService {

	Customer save(Customer customer);
	List<Customer> show();
}
