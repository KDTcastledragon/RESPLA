package com.res.pla.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.res.pla.domain.UserDTO;
import com.res.pla.mapper.SeatMapper;
import com.res.pla.mapper.UsageHistoryMapper;
import com.res.pla.mapper.UserMapper;
import com.res.pla.mapper.UserPurchasedProductMapper;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserMapper usermapper;

	@Autowired
	SeatMapper seatmapper;

	@Autowired
	UserPurchasedProductMapper uppmapper;

	@Autowired
	UsageHistoryMapper usgmapper;

	@Override
	public List<UserDTO> selectAllUsers() {
		return usermapper.selectAllUsers();
	}

	@Override
	public UserDTO selectUser(String id) {
		return usermapper.selectUser(id);
	}

	@Override
	public boolean idDupCheck(String id) {
		UserDTO existUser = usermapper.selectUser(id);

		if (existUser == null) {
			return false;
		} else {
			return true;
		}
	}

	@Override
	public boolean join(String id, String password, String user_name, LocalDate birth, String phone_number) {

		int isJoined = usermapper.join(id, password, user_name, birth, phone_number);

		log.info("뭐가문제지??? : {}", isJoined);
		return isJoined > 0;

	}

	@Override
	public boolean matchId(String id) {
		try {
			log.info("");

			UserDTO userid = usermapper.selectUser(id);

			log.info("matchId : " + userid.getId());

			if (userid.getId().equals(id)) {
				return true;

			} else {

				return false;
			}
		} catch (Exception e) {
			log.info("아이디일치검사 예외처리 : " + e.toString());
			return false;
		}
	}

	@Override
	public void clean() {
		seatmapper.clean();
		uppmapper.clean();
		usgmapper.clean();
	}

	@Override
	public List<UserDTO> selectBysearchWord(String searchWord) {
		return usermapper.selectBySearchWord(searchWord);
	}

	@Override
	public List<UserDTO> selectByBenned(boolean opt) {
		return usermapper.selectByBenned(opt);
	}

	@Override
	public boolean ben(String id, boolean ben, String cause) {
		log.info("ben 값: {}", ben);

		int converted;
		int caused;
		int benCount;

		if (ben == true) {
			converted = usermapper.convertIsBenned(id, false);
			caused = usermapper.updateBenCause(id, cause);
			benCount = usermapper.benCountUp(id);

			return converted > 0 && caused > 0 && benCount > 0;

		} else if (ben == false) {
			converted = usermapper.convertIsBenned(id, true);
			caused = usermapper.updateBenCause(id, cause);

			return converted > 0 && caused > 0;

		} else {

			return false;
		}
	}

}
