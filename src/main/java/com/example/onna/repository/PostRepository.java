package com.example.onna.repository;

import com.example.onna.entity.PostEntity;
import jakarta.annotation.Nullable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PostRepository extends JpaRepository<PostEntity, Long> {
    boolean existsById(@Nullable Long id);

    Optional<PostEntity> findByTitle(String title);
}
