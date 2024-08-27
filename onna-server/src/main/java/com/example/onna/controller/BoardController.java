package com.example.onna.controller;

import com.example.onna.entity.Post;
import com.example.onna.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequiredArgsConstructor
@Slf4j
public class BoardController {
    private final BoardService boardService;

    @GetMapping("/board/write")
    public String write() {
        return "write";
    }

    @PostMapping("/board/write.do")
    public String writeDo(
            @RequestParam("title") String title,
            @RequestParam("content") String content,
            @RequestParam("writer") String writer) {
        if (title.isEmpty() || content.isEmpty() || writer.isEmpty()) {
            return "redirect:/board/write";
        }

        // 저장
        Post post = Post.builder()
                .title(title)
                .content(content)
                .writer(writer)
                .build();
        log.info("Write {}", post);

        boardService.addPost(post);
        return "redirect:list";
    }

    @GetMapping("/board/list")
    public String list(Model model) {
        List<Post> list = boardService.list();


        model.addAttribute("list", list);

        return "list";
    }

    @GetMapping("/board/detail")
    public String detail(Model model,
                         @RequestParam("id") int id) {
        Post post = boardService.read(id);

        model.addAttribute("post", post);

        return "detail";
    }

    @GetMapping("/board/detail/{id}")
    public String detail1(Model model,
                          @PathVariable("id") int id) {
        return detail(model, id);
    }

    @GetMapping("/board/update/{id}")
    public String update(@PathVariable("id") int id, Model model) {
        Post post = boardService.read(id);
        model.addAttribute("post", post);
        return "update";
    }

    @PostMapping("/board/update.do")
    public String updateDo(
            @RequestParam("title") String title,
            @RequestParam("content") String content,
            @RequestParam("writer") String writer) {
        if (title.isEmpty() || content.isEmpty() || writer.isEmpty()) {
            return "redirect:/board/update";
        }
        // 수정
        Post post = Post.builder()
                .title(title)
                .content(content)
                .writer(writer)
                .build();

        log.info("Update {}", post);

        boardService.update(post);
        return "redirect:/board/list";
    }

    @GetMapping("/board/delete/{id}")
    public String delete(@PathVariable("id") int id) {
        boardService.delete(id);
        return "redirect:/board/list";
    }

    @GetMapping("/api/board/read")
    public Post getPost(
            @RequestParam("id") int id) {

        return boardService.read(id);
    }

    @GetMapping("/api/board/read/{id}")
    public Post getPost1(
            @PathVariable int id) {
        return boardService.read(id);
    }
}
