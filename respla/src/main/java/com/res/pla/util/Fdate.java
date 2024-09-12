package com.res.pla.util;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Fdate {

	private static final DateTimeFormatter DEFAULTFORMATTER = DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초");
	private static final DateTimeFormatter DEFAULTFORMATTER2 = DateTimeFormatter.ofPattern("yyyy-MM-dd / HH:mm:ss");
	private static final DateTimeFormatter MONTHDAYFORMATTER = DateTimeFormatter.ofPattern("MM월 dd일 HH시 mm분 ss초");
	private static final DateTimeFormatter TIMEFORMATTER = DateTimeFormatter.ofPattern("'시간' HH:mm:ss");

	public static String form(LocalDateTime date) {
		String formattedDate = DEFAULTFORMATTER.format(date);  // String 객체는 인스턴스 생성 비용이 낮음. 메소드 종료시 바로 소멸. 이 과정은 매우 빠르며, 메모리 관리 측면에서 간단.
		int nanoSec = date.getNano();
		int first3 = nanoSec / 1_000_000;
		int last6 = nanoSec % 1_000_000;
		return formattedDate + String.format(" / %03d-%06d n ", first3, last6);
	}

	public static String form2(LocalDateTime date) {
		String formattedDate = DEFAULTFORMATTER2.format(date);  // String 객체는 인스턴스 생성 비용이 낮음. 메소드 종료시 바로 소멸. 이 과정은 매우 빠르며, 메모리 관리 측면에서 간단.
		return formattedDate;
	}

	public static String chgByType(LocalDateTime date, int type) {
		//		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd '시간' HH:mm:ss"); // 이렇게 쓰면 호출될때마다 매번 새로운 인스턴스 생성.
		String formattedDate = "";

		switch (type) {

		case 1:
			formattedDate = MONTHDAYFORMATTER.format(date);
			break;

		case 2:
			formattedDate = TIMEFORMATTER.format(date);
			break;

		default:
			throw new IllegalArgumentException();
		}

		return formattedDate;
	}
}
