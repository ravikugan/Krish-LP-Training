package com.kugan.configconsumer.configconsumer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kugan.configconsumer.configconsumer.model.MemberProfileConfiguration;

@RestController
public class ProfileController {

	@Autowired
	MemberProfileConfiguration memberProfileConfiguration;
	
	@RequestMapping(value = "/profile")
	public MemberProfileConfiguration getConfig() {
		return memberProfileConfiguration;
	}
}
