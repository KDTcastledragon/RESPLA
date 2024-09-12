package com.res.pla.mapper;

import java.util.List;

import com.res.pla.domain.UsageHistoryDTO;

public interface UsageHistoryMapper {

	int recordAction(String id, int seat_num, String action_type, String upp_code);

	List<UsageHistoryDTO> selectAllHistory();

	List<UsageHistoryDTO> selectAllHistoryById(String id);

	List<UsageHistoryDTO> selectAllHistoryByIdActionType(String id);

	void clean();
}
