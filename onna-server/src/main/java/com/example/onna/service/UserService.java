package com.example.onna.service;

import com.example.onna.dto.UserDTO;
import com.example.onna.entity.UserEntity;
import com.example.onna.exception.CustomException;
import com.example.onna.exception.ErrorCode;
import com.example.onna.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    private static final String EMAIL_PATTERN =
            "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";

    private static final Pattern pattern = Pattern.compile(EMAIL_PATTERN);

    public UserEntity saveUser(UserDTO userDTO) throws CustomException {
        String email = userDTO.getEmail();
        String rawPassword = userDTO.getPassword();
        String hashedPassword = passwordEncoder.encode(rawPassword);

        if (!checkEmailVerification(email)) {
            throw new CustomException(ErrorCode.HAS_EMAIL);
        }

        Boolean isExist = userRepository.existsByEmail(email);

        if (isExist) {
            throw new CustomException(ErrorCode.HAS_EMAIL);
        }

        UserEntity userEntity = new UserEntity();

        userEntity.setEmail(email);
        userEntity.setPassword(hashedPassword);

        return userRepository.save(userEntity);
    }

    private Boolean checkEmailVerification(String email) {
        Matcher matcher = pattern.matcher(email);
        return matcher.matches();
    }

    public UserEntity authenticateUser(String email, String password) throws CustomException {
        UserEntity userEntity = userRepository.findByEmail(email)
                .orElseThrow(() -> new CustomException(ErrorCode.USER_NOT_FOUND));

        if (userEntity != null && passwordEncoder.matches(password, userEntity.getPassword())) {
            return userEntity;
        } else {
            return null;
        }
    }
}
