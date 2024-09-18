package com.res.pla.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.res.pla.domain.AdminDTO;
import com.res.pla.domain.UserDTO;
import com.res.pla.domain.UserPurchasedProductDTO;
import com.res.pla.service.SeatFacade;
import com.res.pla.service.SeatService;
import com.res.pla.service.UserPurchasedProductService;
import com.res.pla.service.UserService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
@Log4j2
public class UserController {

	UserPurchasedProductService uppservice;
	UserService userservice;
	SeatService seatservice;
	SeatFacade seatfacade;

	//====[1. 로그인]========================================================================================
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDTO request) {
		String id = request.getId();
		String pw = request.getPassword();

		log.info("request.id :" + id);

		UserDTO dto = userservice.selectUser(id);

		if (dto != null) {
			boolean ben = dto.isBenned();

			if (ben == true) {
				return ResponseEntity.status(HttpStatus.FORBIDDEN).body("benned_user");

			} else {
				boolean isMatchedId = userservice.matchId(id);

				if (isMatchedId) {
					log.info("비밀번호 일치 검사");

					return new ResponseEntity<>(dto, HttpStatus.OK);

				} else {
					return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("bad");
				}
			}

		} else {
			return new ResponseEntity<>(dto, HttpStatus.UNAUTHORIZED);
		}
	}

	//====[2. 회원가입]========================================================================================
	//	@PostMapping("/join")
	//	public ResponseEntity<?> join(@RequestBody UserDTO data) {
	//
	//	}

	//====[2. 로그인 유저 실시간 정보]========================================================================================
	@PostMapping("/loginedUser")
	public ResponseEntity<?> loginedUser(@RequestBody Map<String, String> idData) {
		try {
			String id = idData.get("id");
			boolean isUserCheckedIn = seatfacade.isUserCheckedIn(id); // 입실 여부 확인

			Map<String, Object> loginedUserData = new HashMap<>();

			loginedUserData.put("userId", id);
			loginedUserData.put("isCheckedIn", isUserCheckedIn);

			if (isUserCheckedIn) {
				int usedSeatNum = seatservice.selectSeatById(id).getSeat_num();
				UserPurchasedProductDTO upp = uppservice.selectInUsedTrueUpp(id);

				loginedUserData.put("usedSeatNum", usedSeatNum);
				loginedUserData.put("inUsedUppCode", upp.getUpp_code());
				loginedUserData.put("p_type", upp.getP_type());

				if (upp.getP_type().equals("m")) {
					loginedUserData.put("time_value", upp.getTime_value());
					loginedUserData.put("available_time", upp.getAvailable_time());
					//					loginedUserData.put("used_time", upp.getUsed_time());

				} else if (upp.getP_type().equals("d") || upp.getP_type().equals("f")) {
					loginedUserData.put("day_value", upp.getDay_value());
					loginedUserData.put("end_date", upp.getEnd_date());
					//					loginedUserData.put("start_date", upp.getStart_date());

				} else {
					log.info("로그인 사용자 upp p_type 오류");
					return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("p_type error");
				}
			}

			//			log.info("loginedUserData 전송 : " + loginedUserData.toString());

			return ResponseEntity.ok().body(loginedUserData);

		} catch (Exception e) {
			throw e;
		}
	}

	//====[4. 모든 유저 정보 ]========================================================================================isCurrentUse
	@GetMapping("/allUserList")
	public ResponseEntity<?> allUserList() {
		List<UserDTO> userList = userservice.selectAllUsers();
		log.info("all user : {}", userList);

		return ResponseEntity.ok(userList);
	}

	@GetMapping("/abcde")
	public ResponseEntity<?> abcde() {
		userservice.clean();
		log.info("");
		log.info("@@@@@@@@@@@@@@@@전부 삭제@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
		log.info("");

		return ResponseEntity.ok().build();
	}

	//====[5. 검색 단어 기준 유저  정보 ]========================================================================================isCurrentUse
	@GetMapping("/userSearch")
	public ResponseEntity<?> userSearch(@RequestParam(value = "searchWord", required = false) String searchWord) {
		log.info("");
		log.info("유저ID검색 : {}", searchWord);

		List<UserDTO> searchedList = null;

		if (searchWord == null) {
			searchedList = userservice.selectAllUsers();
		} else {
			searchedList = userservice.selectBysearchWord(searchWord);
		}

		log.info("");

		return ResponseEntity.ok().body(searchedList);
	}

	//====[6. 체크인상태기준 유저 정보 검색 ]========================================================================================isCurrentUse
	@GetMapping("/selectByCheckedStatus")
	public ResponseEntity<?> selectByCheckedStatus(@RequestParam(value = "opt") String opt) {
		log.info("");
		log.info("e_checkStatus : {}", opt);
		List<UserDTO> searchedList = null;

		if (opt.equals("all")) {
			searchedList = userservice.selectAllUsers();
		} else {
			boolean option = Boolean.parseBoolean(opt);
			log.info("option : {}", option);
			searchedList = seatfacade.selectByCheckedStatus(option);
		}
		log.info("");

		return ResponseEntity.ok().body(searchedList);
	}

	//====[7. 체크인 상태 기준 유저 정보]========================================================================================isCurrentUse
	@GetMapping("/selectByBenned")
	public ResponseEntity<?> selectByBenned(@RequestParam(value = "opt") String opt) {
		log.info("");
		log.info("e_Benned : {}", opt);

		List<UserDTO> searchedList = null;

		if (opt.equals("all")) {
			searchedList = userservice.selectAllUsers();
		} else {
			boolean option = Boolean.parseBoolean(opt);
			log.info("option : {}", option);

			searchedList = userservice.selectByBenned(option);
		}

		log.info("");
		return ResponseEntity.ok().body(searchedList);
	}

	//====[8. 이용 금지 처분]========================================================================================isCurrentUse
	@PostMapping("/ben")
	public ResponseEntity<?> ben(@RequestBody Map<String, String> data) {
		log.info("");
		log.info("ben_data : {}", data);

		String id = data.get("id");
		String benState = data.get("isBenned");
		String cause = data.get("benCause");

		log.info("벤! {} {}", id, benState);

		boolean isBenned = "true".equalsIgnoreCase(benState);

		boolean result = userservice.ben(id, isBenned, cause);

		if (result) {
			return ResponseEntity.ok().build();

		} else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("conflict");
		}
	}

	//====[9. 이용 금지 처분]========================================================================================
	@PostMapping("/profile")
	public ResponseEntity<?> profile(@RequestBody Map<String, String> data) {
		log.info("");
		log.info("ben_data : {}", data);

		String id = data.get("id");

		UserDTO userInfo = userservice.selectUser(id);

		return ResponseEntity.ok().body(userInfo);
	}

	//====[관리자 로그인]======================================================================================================
	@PostMapping("/adminLogIn")
	public ResponseEntity<?> adminLogIn(@RequestBody AdminDTO data) {
		log.info("");
		log.info("adminData : {}", data);

		String id = data.getId();
		String password = data.getPassword();
		return ResponseEntity.ok().body(id);
	}

}
