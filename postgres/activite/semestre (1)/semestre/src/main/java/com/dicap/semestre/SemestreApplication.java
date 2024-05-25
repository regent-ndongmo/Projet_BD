package com.dicap.semestre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.CrossOrigin;

@EnableDiscoveryClient
@SpringBootApplication
@CrossOrigin(origins = {"http://192.168.22.96:3000", "http://localhost:3000", "http://127.0.0.1:3000" })
public class SemestreApplication {

	public static void main(String[] args) {
		SpringApplication.run(SemestreApplication.class, args);
	}

}
