package com.res.pla.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.res.pla.domain.AdminDTO;
import com.res.pla.mapper.AdminMapper;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminMapper mapper;

	@Override
	public AdminDTO selectAdmin(String id) {
		AdminDTO dto = mapper.selectAdmin(id);
		return dto;
	}

}
