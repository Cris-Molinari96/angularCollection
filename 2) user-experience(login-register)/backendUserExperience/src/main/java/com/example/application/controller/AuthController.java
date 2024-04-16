package com.example.application.controller;

import com.example.application.dto.UserDto;
import com.example.application.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

/** Esposizione */
//    @PostMapping("login")
//    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto){
//        UserDto user =  userService.login(credentialsDto);
//        return ResponseEntity.ok(user);
//    }

    @GetMapping("/api/test")
    public void getData(){

        System.out.println("Richiesta effettuata con successo");

    }

}
