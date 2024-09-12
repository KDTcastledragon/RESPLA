package com.res.pla.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor // 모든값을 초기화하는 생성자 : 모든값을 초기화?????? 무엇으로? 0?
@NoArgsConstructor	// default 생성자
@Data
public class UserPurchasedProductDTO {

	private String upp_code;
	private LocalDateTime purchase_date;
	private String id;

	private int product_code;
	private String p_type;
	private int price;

	private int time_value;
	private int used_time;
	private int available_time;

	private int day_value;
	private LocalDateTime start_date;
	private LocalDateTime end_date;

	private boolean in_used;
	private boolean calculated;
	private boolean usable;

	private String payment;
	private String order_type;
	private boolean refunded;

}
