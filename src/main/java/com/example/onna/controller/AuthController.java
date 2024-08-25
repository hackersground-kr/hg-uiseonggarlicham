package com.example.onna.controller;

import com.example.onna.dto.UserDTO;
import com.example.onna.entity.UserEntity;
import com.example.onna.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO) {
        try {
            UserEntity userEntity = userService.saveUser(userDTO);

            return ResponseEntity.ok(userEntity);
        } catch (Exception e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }


}
