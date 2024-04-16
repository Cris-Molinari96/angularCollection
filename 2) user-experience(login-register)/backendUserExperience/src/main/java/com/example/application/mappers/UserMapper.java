package com.example.application.mappers;

import com.example.application.dto.UserDto;
import com.example.application.entities.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(User user); // è qui se viene fatta la conversione da user a userDto

}
