package com.res.pla.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor // 모든값을 초기화하는 생성자 : 모든값을 초기화?????? 무엇으로? 0?
@NoArgsConstructor	// default 생성자
@Data
public class SeatDTO {
	private int seat_num;

	private boolean occupied;

	private String id;

	private String upp_code;
}
