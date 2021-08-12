package com.kugan.rentcloud.authorizationserver.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AccountStatusUserDetailsChecker;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.kugan.rentcloud.authorizationserver.model.AuthUserDetails;
import com.kugan.rentcloud.authorizationserver.model.User;
import com.kugan.rentcloud.authorizationserver.repository.UserDetailsRepository;

@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	UserDetailsRepository userDetailsRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optionalUser = userDetailsRepository.findByUsername(username);
		
		optionalUser.orElseThrow(() -> new UsernameNotFoundException("Username or Password is wrong"));

		UserDetails userDetails = new AuthUserDetails(optionalUser.get()); 
		
		new AccountStatusUserDetailsChecker().check(userDetails);

		return userDetails;
	}

}
