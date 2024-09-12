package com.res.pla.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {
	private String id;

	private String user_name;

	private String birth;
	private String phone_number;

	private String join_date;
	private String deactivation_date;

	private String is_benned;

}
