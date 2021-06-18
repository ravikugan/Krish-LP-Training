package lk.kugan.rentcloud.rentui.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.kugan.rentcloud.commons.model.Customer;

import lk.kugan.rentcloud.rentui.config.AccessToken;

@Controller
@EnableOAuth2Sso
public class UIController extends WebSecurityConfigurerAdapter{
	
	@Autowired
	RestTemplate restTemplate;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/") //Root page can be accessed by anyone
		.permitAll()
		.anyRequest()
		.authenticated();
	
	}
	
	@RequestMapping(value = "/")
	public String loadUI() {
		return "home";
	}
	
	@RequestMapping(value = "/secure")
	public String loadSecuredUI() {		
		return "secure";
	}
	
	@RequestMapping(value = "/customers")
	public String loadCustomers(Model model) {
		HttpHeaders httpHeader = new HttpHeaders();
		httpHeader.add("Authorization", AccessToken.getAccessToken());
		
		HttpEntity<Customer> customerHttpEntity = new HttpEntity<Customer>(httpHeader);
		ResponseEntity<Customer[]> responseEntity = restTemplate.exchange("http://localhost:8081/services/customers",HttpMethod.GET,customerHttpEntity,Customer[].class);
		
		model.addAttribute("customers",responseEntity.getBody());
		
		System.out.println(responseEntity.getBody().length+">>>>>>>>>>>>>>>>>");
		
		return "secure";
	}
}
