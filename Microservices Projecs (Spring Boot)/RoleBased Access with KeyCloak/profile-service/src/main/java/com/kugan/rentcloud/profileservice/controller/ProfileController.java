package com.kugan.rentcloud.profileservice.controller;

import java.util.List;
import java.util.Optional;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
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
	
	@RolesAllowed("admin")
	@RequestMapping(value = "/profile", method=RequestMethod.POST)
	public Customer save(@RequestBody Customer customer) {
		return customerService.save(customer);
	}
	
	@RequestMapping(value ="/profile/find",method=RequestMethod.GET)
	public Optional<Customer> find(@RequestParam int id){
		return customerService.search(id);
	}
	
	@RolesAllowed("user")
	@RequestMapping(value = "/profile", method=RequestMethod.GET)
	public List<Customer> show(){
		return customerService.show();
	}
	


}
