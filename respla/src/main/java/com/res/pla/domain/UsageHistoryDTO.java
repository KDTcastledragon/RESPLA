package com.res.pla.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor // 모든값을 초기화하는 생성자 : 모든값을 초기화?????? 무엇으로? 0?
@NoArgsConstructor	// default 생성자
@Data
public class UsageHistoryDTO {
	private String uh_code;
	private String id;

	private LocalDateTime used_date_time;

	private int seat_num;

	private String action_type;

	private String upp_code;

	private String p_type;        // 추가
	private int time_value;       // 추가
	private int day_value;        // 추가

}
