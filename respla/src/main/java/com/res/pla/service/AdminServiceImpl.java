package com.res.pla.service;

import java.util.List;

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
	public List<AdminDTO> selectAllAdmin() {
		List<AdminDTO> list = mapper.selectAllAdmin();
		return list;
	}

	@Override
	public List<AdminDTO> selectAllAdminHistory() {
		List<AdminDTO> list = mapper.selectAllAdminHistory();
		return list;
	}

	@Override
	public AdminDTO selectAdmin(String id) {
		AdminDTO dto = mapper.selectAdmin(id);
		return dto;
	}

	@Override
	public boolean createAdmin(String id, String password, String name, String phone_number, String autority) {
		int isCreated = mapper.createAdmin(id, password, name, phone_number, autority);

		if (isCreated > 0) {
			return true;

		} else {
			return false;
		}
	}

	@Override
	public boolean deleteAdmin(String id) {
		int isCreated = mapper.deleteAdmin(id);

		if (isCreated > 0) {
			return true;

		} else {
			return false;
		}
	}

	@Override
	public boolean updateAdmin(String id, String password, String name, String phone_number, String autority) {
		int isUpdated = mapper.updateAdmin(id, password, name, phone_number, autority);

		if (isUpdated > 0) {
			return true;

		} else {
			return false;
		}
	}

}
