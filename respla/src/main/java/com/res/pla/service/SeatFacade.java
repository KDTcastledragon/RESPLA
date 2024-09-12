package com.res.pla.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.res.pla.domain.SeatDTO;
import com.res.pla.domain.UserDTO;
import com.res.pla.domain.UserPurchasedProductDTO;

import lombok.extern.log4j.Log4j2;

@Component
@Transactional
@Log4j2
public class SeatFacade {

	@Autowired
	SeatService seatservice;

	@Autowired
	UserPurchasedProductService uppservice;

	@Autowired
	UsageHistoryService uhservice;

	@Autowired
	UserService userservice;

	public boolean checkInSeat(int seat_num, String id, String upp_code, String p_type) {
		log.info("");

		int isConvertInUsedTrue = uppservice.convertInUsed(id, upp_code, true);
		int isRecordedUsage = uhservice.recordAction(id, seat_num, "in", upp_code);

		if (p_type.equals("m")) {

			int isOccupied = seatservice.occupySeat(seat_num, id, upp_code);
			boolean isStartCalculateTimePass = false;
			uppservice.calculateTimePass(id, upp_code);
			isStartCalculateTimePass = true;

			log.info("SeatFacade 시간권 체크인");
			return (isOccupied > 0) && (isConvertInUsedTrue > 0) && (isRecordedUsage > 0) && isStartCalculateTimePass;

		} else if (p_type.equals("d")) {
			int isOccupied = seatservice.occupySeat(seat_num, id, upp_code);
			return (isOccupied > 0) && (isConvertInUsedTrue > 0) && (isRecordedUsage > 0);

		} else if (p_type.equals("f")) {
			SeatDTO seat = seatservice.selectSeatById(id);

			if (seat != null) {
				boolean isOccupied = seat.isOccupied();

				if (isOccupied == false) {

					log.info("SeatFacade 고정석 체크인 : 고정석 사용중");

					int isConvertOccupied = seatservice.convertOccupied(seat_num, id, upp_code, true);

					return (isRecordedUsage > 0) && (isConvertOccupied > 0);
				}

			} else {
				log.info("SeatFacade 고정석 체크인 : 고정석 첫 이용.");

				int firstOccupy = seatservice.occupySeat(seat_num, id, upp_code);

				return (firstOccupy > 0) && (isConvertInUsedTrue > 0) && (isRecordedUsage > 0);
			}

		}
		return false;
	}

	public boolean checkOutSeat(int usedSeatNum, String id, String usedUppcode, String pType) {
		log.info("");

		int isConvertInUsedFalse = uppservice.convertInUsed(id, usedUppcode, false);
		int isRecordedUsage = uhservice.recordAction(id, usedSeatNum, "out", usedUppcode);

		if (pType.equals("m")) {

			int isVacated = seatservice.vacateSeat(usedSeatNum, id, usedUppcode);
			boolean isStartCalculateTimePass = false;
			uppservice.stopCalculateTimePass(id, usedUppcode);
			isStartCalculateTimePass = true;

			log.info("SeatFacade 시간권 체크아웃");
			return (isVacated > 0) && (isConvertInUsedFalse > 0) && (isRecordedUsage > 0) && isStartCalculateTimePass;

		} else if (pType.equals("d")) {

			int isVacated = seatservice.vacateSeat(usedSeatNum, id, usedUppcode);

			log.info("SeatFacade 기간권 체크아웃");
			return (isVacated > 0) && (isConvertInUsedFalse > 0) && (isRecordedUsage > 0);

		} else if (pType.equals("f")) {
			log.info("SeatFacade 고정석 체크아웃");
			int isConvertOccupied = seatservice.convertOccupied(usedSeatNum, id, usedUppcode, false);

			return (isConvertInUsedFalse > 0) && (isRecordedUsage > 0) && (isConvertOccupied > 0);
		}

		log.info("SeatFacade 체크아웃 pType 오류");
		return false;
	}

	public boolean moveSeat(int usedSeatNum, int newSeatNum, String id, String upp_code) {
		log.info("");

		int vacate = seatservice.vacateSeat(usedSeatNum, id, upp_code);
		int occupy = seatservice.occupySeat(newSeatNum, id, upp_code);
		int isRecordedUsage = uhservice.recordAction(id, newSeatNum, "move", upp_code);
		log.info("SeatFacade 자리이동");

		return (vacate > 0) && (occupy > 0) && (isRecordedUsage > 0);
	}

	public boolean isUserCheckedIn(String id) {
		boolean isExistOccupiedSeatByUserId = seatservice.selectOccupiedSeatById(id);
		UserPurchasedProductDTO inUsedUpp = uppservice.selectInUsedTrueUpp(id);

		if (isExistOccupiedSeatByUserId == true && inUsedUpp != null) {

			return true;
		}

		return false;
	}

	public List<UserDTO> selectByCheckedStatus(boolean opt) {
		List<UserDTO> userList = userservice.selectAllUsers();
		List<UserDTO> filteredList = new ArrayList<>();

		for (UserDTO user : userList) {
			boolean checked = isUserCheckedIn(user.getId());

			if (checked == opt) {
				filteredList.add(user);
				log.info(user);
				log.info("");
			}
		}

		log.info(filteredList);
		return filteredList;

	}
}
