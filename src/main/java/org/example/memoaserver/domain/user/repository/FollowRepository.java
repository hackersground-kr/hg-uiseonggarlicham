package org.example.memoaserver.domain.user.repository;

import org.example.memoaserver.domain.user.entity.FollowEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FollowRepository extends JpaRepository<FollowEntity, Long> {

    List<FollowEntity> findByFollower(Long id);
    List<FollowEntity> findByFollowing(Long id);
}
