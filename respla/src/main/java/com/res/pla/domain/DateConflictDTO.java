package com.res.pla.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DateConflictDTO {

	private boolean conflicted;

	private String p_type;
	private int day_value;

	private LocalDateTime startDateTime;
	private LocalDateTime endDateTime;

}
