package com.example.onna.exception;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import java.io.IOException;

@Slf4j
public class LoginFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        //response.setStatus(HttpServletResponse.SC_OK);//TODO: 에러코드 변경 SC
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);//

        response.getWriter().write("fail");
        log.info("로그인에 실패했습니다");
    }
}
