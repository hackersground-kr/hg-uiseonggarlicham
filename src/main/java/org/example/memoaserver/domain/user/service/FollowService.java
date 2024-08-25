package org.example.memoaserver.domain.user.service;

import lombok.RequiredArgsConstructor;
import org.example.memoaserver.domain.user.dto.FollowDTO;
import org.example.memoaserver.domain.user.repository.FollowRepository;
import org.springframework.stereotype.Service;

/**
 * TODO: 팔로우 구현
 * 팔로우 한 유저의 정보 id로 받기
 * 팔로우 테이블에 팔로우 추가
 * 언팔로우 시 목록에서 삭제
 */
@Service
@RequiredArgsConstructor
public class FollowService {
    private final FollowRepository followRepository;

    public void addFollow(FollowDTO followDTO) {
        
    }
}