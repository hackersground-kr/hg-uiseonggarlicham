package com.example.onna.service;

import com.example.onna.entity.Post;

import java.util.List;

public interface BoardService {
    void addPost(Post post);

    List<Post> list();

    Post read(int id);

    void update(Post post);

    void delete(int id);
}
