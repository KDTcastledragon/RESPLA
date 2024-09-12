package com.res.pla.service;

import java.time.LocalDateTime;
import java.util.List;

import com.res.pla.domain.UserPurchasedProductDTO;

public interface UserPurchasedProductService {

	List<UserPurchasedProductDTO> selectAllUsableUppsById(String id);   // 현재 사용가능 이용권만 가져온다.

	List<UserPurchasedProductDTO> selectAllUsableUppsByIdPType(String id, String p_type);    // 현재 사용가능 이용권을 타입에 따라 가져온다.

	List<UserPurchasedProductDTO> selectAllUppsById(String id);         // 사용자의 모든 구매이력을 가져온다.

	UserPurchasedProductDTO selectExtendUppAfterStartDate(String id, LocalDateTime caledUppStartDate);         // 사용자의 시작날짜 이후 상품들을 가져온다.

	UserPurchasedProductDTO selectInUsedTrueUpp(String id);	    // 사용자가 현재 체크인 사용중 상품 1개를 가져온다.

	UserPurchasedProductDTO selectCalculatedTrueUpp(String id);			    // 현재 시간 / 기간이 차감중인 상품 1개를 가져온다.

	UserPurchasedProductDTO selectUppByUppcode(String upp_code);	        // 상품 1개를 가져온다.

	UserPurchasedProductDTO selectUsableOneUppByIdPType(String id, String p_type);

	//==[사용 전환 관련 메소드]====================================================================
	int convertInUsed(String id, String upp_code, boolean in_used);     // 사용중/미사용중 구분하는 inused Parameter

	boolean convertUsable(String id, String upp_code, boolean usable);

	boolean isDateConflict(String id, LocalDateTime start_date, LocalDateTime end_date);

	//==[시간 계산 관련]====================================================================

	void calculateTimePass(String id, String upp_code);

	void stopCalculateTimePass(String id, String upp_code);

	//==[기간권 관련]====================================================================

	void validateTimePassBeforeCalculateDayPass(String id, String upp_code, LocalDateTime start_date, LocalDateTime end_date);

	void afterLaunchDayPassFromStartDate(String id, String upp_code, LocalDateTime start_date, LocalDateTime end_date);

	List<UserPurchasedProductDTO> selectAllUpps();

	//	boolean convertCalculated(String id, String uppcode, boolean calculated);
	//	void calculateDayPass(String id, String uppcode);
	//	void endCalculateDayPass(String id, String uppcode);
	//	boolean isSchedulerOperating(String id, String uppcode);
	//	boolean shiftToNewPassFromExpiryPass(int usedUseatNum, String id);

}
