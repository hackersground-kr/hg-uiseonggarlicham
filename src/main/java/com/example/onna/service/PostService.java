package com.example.onna.service;

import com.example.onna.dto.PostDto;
import com.example.onna.entity.PostEntity;
import com.example.onna.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    public void savePost(PostDto postDto) {
        PostEntity postEntity = new PostEntity();
        postEntity.setTitle(postDto.getTitle());
        postEntity.setContent(postDto.getContent());
        postRepository.save(postEntity);
    }
}
