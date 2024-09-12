package com.res.pla.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.res.pla.domain.UsageHistoryDTO;
import com.res.pla.service.UsageHistoryService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/usage")
@AllArgsConstructor
@Log4j2
public class UsageHistoryController {

	UsageHistoryService uhservice;

	@PostMapping(value = "/userHistoryList")
	public ResponseEntity<?> selectAllHistoryById(@RequestBody Map<String, String> idData) {
		String id = idData.get("id");

		List<UsageHistoryDTO> uhList = uhservice.selectAllHistoryById(id);
		//		log.info(uhList);

		return ResponseEntity.ok().body(uhList);
	}

}
