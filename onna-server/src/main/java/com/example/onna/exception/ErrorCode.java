package com.example.onna.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    HAS_EMAIL(HttpStatus.CONFLICT, "이미 존재하는 이메일입니다."),
    WRONG_PASSWORD(HttpStatus.NOT_FOUND, "잘못된 비밀번호입니다."),
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "회원 정보가 없습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}