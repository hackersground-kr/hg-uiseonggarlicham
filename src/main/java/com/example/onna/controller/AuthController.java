package com.example.onna.controller;

import com.example.onna.dto.LoginResponseDto;
import com.example.onna.dto.UserDTO;
import com.example.onna.entity.UserEntity;
import com.example.onna.service.UserService;
import com.example.onna.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
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
    private final JwtUtil jwtUtil;

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

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserDTO userDTO) {
        try {
            UserEntity userEntity = userService.authenticateUser(userDTO.getEmail(), userDTO.getPassword());
            if (userEntity != null) {
                String token = jwtUtil.generateToken(userEntity.getEmail());
                return ResponseEntity.ok(new LoginResponseDto(token, "로그인 성공"));
            } else {
                return ResponseEntity.badRequest().body(new LoginResponseDto(null, "로그인 실패: 잘못된 사용자 이름 또는 비밀번호"));
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new LoginResponseDto(null, "로그인 실패: " + e.getMessage()));
        }
    }
}
