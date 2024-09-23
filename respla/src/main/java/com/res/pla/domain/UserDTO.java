package com.res.pla.domain;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
	private String id;
	private String password;

	private String user_name;
	private LocalDate birth;
	private String phone_number;

	private LocalDateTime join_date;
	private LocalDateTime deactivation_date;

	private boolean benned;
	private String ben_cause;
	private String unben_cause;
	private int ben_count;

}
