package org.example.memoaserver.domain.user.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDate;

@Getter @Setter
@Entity(name = "follow")
public class FollowEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long following;

    @Column(nullable = false)
    private Long follower;

    @CreatedDate
    private LocalDate createdAt;
}
