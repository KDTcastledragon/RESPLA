package com.res.pla.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {

	@Bean
	PasswordEncoder getPwEncode() {
		return new BCryptPasswordEncoder();
	}
}

// Spring Boot 3.0부터는 @Configuration 클래스에서 정의한 @Bean 메서드가 public이어야 할 필요가 없어졌습니다.