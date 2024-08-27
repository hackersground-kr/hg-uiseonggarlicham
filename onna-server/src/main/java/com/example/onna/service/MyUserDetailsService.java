package com.example.onna.service;

import com.example.onna.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MyUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        var result = userRepository.findByEmail(username);
        if (result.isEmpty()) {
            throw new UsernameNotFoundException("그런아이디 없음");
        }
        var user = result.get();
        List<GrantedAuthority> authorities = new ArrayList<>();
        if (user.getEmail().equals("admin")) {
            authorities.add(new SimpleGrantedAuthority("관리자"));
        } else {
            authorities.add(new SimpleGrantedAuthority("일반유저"));
        }
        return new CustomUser(user.getEmail(), user.getPassword(), authorities);
    }
}

class CustomUser extends User{
    public CustomUser(String email,
                      String password,
                      Collection<? extends GrantedAuthority> authorities
    ) {
        super(email, password, authorities);
    }
}