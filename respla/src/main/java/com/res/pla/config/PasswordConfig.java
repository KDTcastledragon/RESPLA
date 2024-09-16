package com.res.pla.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PasswordConfig {

	@Bean
	public PasswordEncoder getPwEncode() {
		return new BCryptPasswordEncoder();
	}
}
