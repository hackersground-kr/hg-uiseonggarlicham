package com.example.onna.service;

import com.example.onna.entity.Post;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BoardService {
    void addPost(Post post);

    List<Post> list();

    Post read(int id);

    void update(Post post);

    void delete(int id);
}
