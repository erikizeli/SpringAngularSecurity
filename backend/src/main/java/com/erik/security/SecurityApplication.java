package com.erik.security;

import com.erik.security.auth.AuthenticationService;
import com.erik.security.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Map;

import static com.erik.security.user.Role.ADMIN;
import static com.erik.security.user.Role.MANAGER;

@SpringBootApplication
public class SecurityApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}

	/*@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService service
	) {
		return args -> {
			var admin = RegisterRequest.builder()
					.firstname("Admin")
					.lastname("First")
					.email("firstadmin@gmail.com")
					.password("admin")
					.role(ADMIN)
					.build();
			System.out.println("Admin token: " + service.register(admin).getToken());

			var manager = RegisterRequest.builder()
					.firstname("Manager")
					.lastname("Second")
					.email("secondManager@gmail.com")
					.password("manager")
					.role(MANAGER)
					.build();
			System.out.println("Manager token: " + service.register(manager).getToken());
		};
	}*/


}
