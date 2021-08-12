package com.kugan.rentcloud.profileservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kugan.rentcloud.commons.model.Customer;
import com.kugan.rentcloud.profileservice.service.CustomerService;

@RestController
@RequestMapping(value = "services")
public class ProfileController {
	
	@Autowired
	CustomerService customerService;
	
	@RequestMapping(value = "/customers", method=RequestMethod.POST)
	@PreAuthorize("hasAuthority('create_profile')")
	public Customer save(@RequestBody Customer customer) {
		return customerService.save(customer);
	}
	
	@RequestMapping(value = "/customers", method=RequestMethod.GET)
	@PreAuthorize("hasRole('ROLE_admin')")
	public List<Customer> show(){
		return customerService.fetch();
	}
	
	@RequestMapping(value = "/customers/{id}", method=RequestMethod.GET)
	public Customer fetchByID(@PathVariable(value="id") int customerID) {
		return customerService.fetchById(customerID);
	}

}
