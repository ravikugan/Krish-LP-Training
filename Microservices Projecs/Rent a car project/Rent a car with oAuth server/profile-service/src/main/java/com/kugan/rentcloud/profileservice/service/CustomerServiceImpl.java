package com.kugan.rentcloud.profileservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.stereotype.Service;

import com.kugan.rentcloud.commons.model.Customer;
import com.kugan.rentcloud.profileservice.repository.CustomerRepository;

@Service
@EnableResourceServer
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	CustomerRepository customerRepository;
	
	public Customer save(Customer customer) {
		return customerRepository.save(customer);
	}
	
	public List<Customer> show(){
		return customerRepository.findAll();
	}
}
