package com.res.pla.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.res.pla.domain.UserDTO;

@Mapper
public interface UserMapper {

	UserDTO selectUser(String id);

	List<UserDTO> selectAllUsers();

	UserDTO selectBySearchWordOnlyOne(String word);

	int matchId(String id);

	List<UserDTO> selectBySearchWord(String searchWord);

	List<UserDTO> selectByBenned(boolean opt);

	int convertIsBenned(String id, boolean reversedBenned);

	int updateBenCause(String id, String cause);

	int benCountUp(String id);

}
