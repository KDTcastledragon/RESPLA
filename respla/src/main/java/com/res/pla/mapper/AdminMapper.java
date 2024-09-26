package com.res.pla.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.res.pla.domain.AdminDTO;

@Mapper
public interface AdminMapper {

	List<AdminDTO> selectAllAdmin();

	List<AdminDTO> selectAllAdminHistory();

	AdminDTO selectAdmin(String id);

	int createAdmin(String id, String password, String name, String phone_number, String autority);

	int deleteAdmin(String id);

	int updateAdmin(String id, String password, String name, String phone_number, String autority);

}
