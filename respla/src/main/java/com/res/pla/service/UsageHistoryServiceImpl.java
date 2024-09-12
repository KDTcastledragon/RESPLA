package com.res.pla.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.res.pla.domain.UsageHistoryDTO;
import com.res.pla.mapper.UsageHistoryMapper;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class UsageHistoryServiceImpl implements UsageHistoryService {

	@Autowired
	UsageHistoryMapper uhmapper;

	@Override
	public int recordAction(String id, int seat_num, String action_type, String upp_code) {
		log.info("");
		return uhmapper.recordAction(id, seat_num, action_type, upp_code);
	}

	@Override
	public List<UsageHistoryDTO> selectAllHistory() {
		log.info("");
		return uhmapper.selectAllHistory();
	}

	@Override
	public List<UsageHistoryDTO> selectAllHistoryById(String id) {
		log.info("");
		return uhmapper.selectAllHistoryById(id);
	}

	@Override
	public List<UsageHistoryDTO> selectAllHistoryByIdActionType(String id) {
		log.info("");
		return uhmapper.selectAllHistoryByIdActionType(id);
	}

}
