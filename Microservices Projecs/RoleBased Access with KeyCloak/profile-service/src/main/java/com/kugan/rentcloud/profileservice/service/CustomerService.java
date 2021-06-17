package com.kugan.rentcloud.profileservice.service;

import java.util.List;
import java.util.Optional;

import com.kugan.rentcloud.commons.model.Customer;

public interface CustomerService {

	Customer save(Customer customer);
	List<Customer> show();
	Optional<Customer> search(int id);
}
