package com.res.pla.service;

import java.util.List;

import com.res.pla.domain.AdminDTO;

public interface AdminService {

	List<AdminDTO> selectAllAdmin();

	List<AdminDTO> selectAllAdminHistory();

	AdminDTO selectAdmin(String id);

	boolean createAdmin(String id, String password, String name, String phone_number, String autority);

	boolean deleteAdmin(String id);

	boolean updateAdmin(String id, String password, String name, String phone_number, String autority);

}
