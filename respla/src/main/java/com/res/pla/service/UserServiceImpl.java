package com.res.pla.service;

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
	public boolean ben(String id, String ben) {
		log.info("ben 값: {}", ben);

		if (ben.equals("1")) {
			return usermapper.convertIsBenned(id, false) > 0;

		} else if (ben.equals("0")) {
			return usermapper.convertIsBenned(id, true) > 0;

		} else {
			return false;
		}
	}

}
