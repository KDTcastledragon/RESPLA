package com.res.pla.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminDTO {
	private String id;
	private String password;

	private String admin_name;

	private String authentication;

	private LocalDateTime latest_update_date;

}
