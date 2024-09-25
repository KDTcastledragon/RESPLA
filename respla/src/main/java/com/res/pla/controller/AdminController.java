package com.res.pla.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.res.pla.domain.AdminDTO;
import com.res.pla.service.AdminService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/admin")
@AllArgsConstructor
@Log4j2
public class AdminController {
	AdminService admservice;
	PasswordEncoder encoder;

	//====[로그인]============================================================================
	@PostMapping("/adminLogin2")
	public ResponseEntity<?> login2(@RequestBody AdminDTO data) {
		log.info("");

		String id = data.getId();
		String password = data.getPassword();

		AdminDTO dto = admservice.selectAdmin(id);

		if (dto != null) {
			Map<String, Object> adminData = new HashMap<>();

			adminData.put("admin_name", dto.getAdmin_name());
			adminData.put("authority", dto.getAuthority());
			//			adminData.put("admcode", "s9811");
			adminData.put("admcode", "s9811");

			return ResponseEntity.ok().body(adminData);
		} else {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("forbidden");
		}
	}

	@PostMapping("/adminLogin")
	public ResponseEntity<?> login(@RequestBody AdminDTO data) {
		log.info("");

		String id = data.getId();
		String password = data.getPassword();

		AdminDTO dto = admservice.selectAdmin(id);

		if (dto != null) {
			if (encoder.matches(password, dto.getPassword())) {
				Map<String, Object> adminData = new HashMap<>();

				adminData.put("admin_name", dto.getAdmin_name());
				adminData.put("authentication", dto.getAuthority());

				return ResponseEntity.ok().body(adminData);
			} else {
				log.info("비번틀리당");
				return ResponseEntity.status(HttpStatus.FORBIDDEN).body("forbidden");
			}
		} else {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("forbidden");
		}
	}

	//====[로그인]============================================================================
	@PostMapping("/createAdmin")
	public ResponseEntity<?> createAdmin(@RequestBody AdminDTO data) {
		log.info("");

		String id = data.getId();
		String password = data.getPassword();

		AdminDTO dto = admservice.selectAdmin(id);

		if (dto != null) {
			if (encoder.matches(password, dto.getPassword())) {
				Map<String, Object> adminData = new HashMap<>();

				adminData.put("admin_name", dto.getAdmin_name());
				adminData.put("authentication", dto.getAuthentication());

				return ResponseEntity.ok().body(adminData);
			} else {
				log.info("비번틀리당");
				return ResponseEntity.status(HttpStatus.FORBIDDEN).body("forbidden");
			}
		} else {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("forbidden");
		}
	}
}
