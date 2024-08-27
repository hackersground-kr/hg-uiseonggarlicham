package com.example.onna.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class Post {
    private Long id;

    private String title;

    private String content;

    private String writer;
}
