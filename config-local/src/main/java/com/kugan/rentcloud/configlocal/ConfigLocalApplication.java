package com.kugan.rentcloud.configlocal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableAutoConfiguration
@EnableConfigServer 
public class ConfigLocalApplication {//Ready to run configurations with the above annoation.

	public static void main(String[] args) {
		SpringApplication.run(ConfigLocalApplication.class, args);
	}

}
