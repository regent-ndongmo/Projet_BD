package com.dicap.eurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableEurekaServer
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class EurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServerApplication.class, args);
	}

}
