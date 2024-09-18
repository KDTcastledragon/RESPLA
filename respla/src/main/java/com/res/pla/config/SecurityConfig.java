//package com.res.pla.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .cors() // CORS 설정
//            .and()
//            .csrf().disable() // CSRF 비활성화 (필요에 따라)
//            .authorizeRequests()
//            .anyRequest().permitAll(); // 모든 요청 허용 (필요에 따라 설정)
//
//        return http.build();
//    }
//}