package com.kugan.configlocal.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ComfigLocalApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComfigLocalApplication.class, args);
	}

}
