package com.example.application.service;

import com.example.application.dto.UserDto;
import com.example.application.entities.User;
import com.example.application.exception.AppException;
import com.example.application.mappers.UserMapper;
import com.example.application.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository; // fornisce metodi per l'accesso ai dati degli utenti in un db
    private final PasswordEncoder passwordEncoder; // fornisce metodi per codificare le password degli utenti
    private final UserMapper userMapper; // è un mapper che converte gli oggetti di tipo User in UserDto

//    public UserDto login(CredentialsDto credentialsDto){
//        User user = userRepository.findByLogin(credentialsDto.login())
//                .orElseThrow(()-> new AppException("Unknown user", HttpStatus.NOT_FOUND));
//
//        if(passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()),
//                user.getPassword())){
//            return userMapper.toUserDto(user);
//        }
//        throw new AppException("Invalid password!", HttpStatus.BAD_REQUEST);
//    }





}
