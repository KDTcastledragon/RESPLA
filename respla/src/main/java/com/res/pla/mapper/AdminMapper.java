package com.res.pla.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.res.pla.domain.AdminDTO;

@Mapper
public interface AdminMapper {

	AdminDTO selectAdmin(String id);

}
