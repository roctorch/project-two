package com.revature.backend;

import com.revature.backend.entity.User;
import com.revature.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
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
		List<String> authoritiesAdmin = List.of("EMPLOYEES");
		userAdmin.setAuthorities(authoritiesAdmin);

		User userEmp = new User();
		userEmp.setEmail("employee@mail.com");
		userEmp.setPassword("password");
		userEmp.setName("Employee");
		List<String> authoritiesEmp = List.of("EMPLOYEES");
		userEmp.setAuthorities(authoritiesEmp);

		userService.register(userAdmin);
		userService.register(userEmp);
	}

	public static void main(String[] args) {
		SpringApplication.run(BackEndApplication.class, args);
	}
}
