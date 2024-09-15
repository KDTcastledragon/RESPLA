package com.res.pla.domain;

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
	private String birth;
	private String phone_number;

	private String join_date;
	private String deactivation_date;

	private boolean benned;
	private String ben_cause;
	private String unben_cause;
	private int ben_count;

}
