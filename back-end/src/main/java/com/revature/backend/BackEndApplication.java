package com.revature.backend;

import com.revature.backend.entity.User;
import com.revature.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.util.List;

@SpringBootApplication
public class BackEndApplication {

	@Autowired
	private UserService userService;

	@PostConstruct
	public void registerUsers() {
		User userAdmin = new User();
		userAdmin.setEmail("admin@mail.com");
		userAdmin.setPassword("secret");
		userAdmin.setName("Admin");
		List<String> authoritiesAdmin = List.of("ROLE_EMPLOYEE", "ROLE_MANAGER");
		userAdmin.setAuthorities(authoritiesAdmin);

		User userEmp = new User();
		userEmp.setEmail("info@mail.com");
		userEmp.setPassword("password");
		userEmp.setName("Employee");
		List<String> authoritiesEmp = List.of("ROLE_EMPLOYEE");
		userEmp.setAuthorities(authoritiesEmp);

		userService.register(userAdmin);
		userService.register(userEmp);
	}

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
}
