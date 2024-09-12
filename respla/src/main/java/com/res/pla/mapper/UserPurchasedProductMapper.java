package com.res.pla.mapper;

import java.time.LocalDateTime;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.res.pla.domain.UserPurchasedProductDTO;

@Mapper
public interface UserPurchasedProductMapper {

	List<UserPurchasedProductDTO> selectAllUsableUppsById(String id);    // 현재 사용가능 이용권만 가져온다.

	List<UserPurchasedProductDTO> selectAllUsableUppsByIdPType(String id, String p_type);    // 현재 사용가능 이용권을 타입에 따라 가져온다.

	List<UserPurchasedProductDTO> selectAllUppsById(String id);          // 사용자의 모든 이용권을 가져온다.

	List<UserPurchasedProductDTO> selectAfterStartDateUppsById(String id, LocalDateTime start_date);          // 시작날짜 이후의 upp 예매상품 정보.

	List<UserPurchasedProductDTO> selectUppsByEndDateAfterCurrentDate(String id, LocalDateTime currentDateTime);

	UserPurchasedProductDTO selectExtendUppAfterStartDate(String id, LocalDateTime caledUppStartDate);

	UserPurchasedProductDTO selectUppByUppcode(String upp_code);         // 상품 1개를 가져온다.

	UserPurchasedProductDTO selectInUsedTrueUpp(String id);        // 사용자가 현재 사용중인 상품 1개를 가져온다.

	UserPurchasedProductDTO selectCalculatedTrueUpp(String id);             // 현재 시간or기간이 차감중인 상품 1개를 가져온다.

	UserPurchasedProductDTO selectUsableOneUppByIdPType(String id, String p_type);

	int convertInUsed(String id, String upp_code, boolean in_used);         // 입실시 true , 퇴실시 false.

	int convertCalculated(String id, String upp_code, boolean calculated); // 시간권: 입실시 true , 기간권: endDate까지 true

	int convertUsable(String id, String upp_code, boolean usable);         // 

	int realTimeCalculateUppTimePass(String id, String upp_code, int minute);   // 시간차감 계산

	void clean();

	List<UserPurchasedProductDTO> selectAllUpps();

}
