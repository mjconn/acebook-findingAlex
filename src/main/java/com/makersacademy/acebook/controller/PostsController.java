
package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.model.Post;
import com.makersacademy.acebook.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Dictionary;


@RestController
public class PostsController {

    @Autowired
    PostRepository postRepository;

    @GetMapping("/api/posts")

    public Iterable<Post> index() {
        Iterable<Post> posts = postRepository.findAll();
        ArrayList<Post> shouty_posts = new ArrayList<Post>();
        posts.forEach(post -> {
            shouty_posts.add(
                    new Post(post.content.toUpperCase(), post.date, post.likes, post.userName, post.id)
            );
        });
        return shouty_posts;
    }



    // public Iterable<Post> index() {
    //     return postRepository.findAll();
    // }


}
