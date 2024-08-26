package com.example.onna.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    HAS_EMAIL(HttpStatus.BAD_REQUEST, "존재하는 이메일입니다.");

    private final HttpStatus httpStatus;
    private final String message;
}