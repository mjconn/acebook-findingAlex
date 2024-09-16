import com.makersacademy.acebook.model.SimplePost;

import com.makersacademy.acebook.repository.SimplePostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;

import java.math.BigDecimal;

import java.util.ArrayList;
import java.util.Dictionary;


// @RestController
// @RequestMapping("simpleposts")
public class SimplePostsController {

    @Autowired
    SimplePostRepository postRepository;

    //GET all
    @GetMapping("/api/simpleposts")
    public Iterable<SimplePost> index() {
      Iterable<SimplePost> simpleposts = postRepository.findAll();
      return simpleposts;
    }

    @PostMapping("/api/simpleposts")
    // public SimplePost save(@RequestBody SimplePost newPost) {
    //     System.out.println("****************" + newPost + "******************");
    //    return postRepository.save(newPost);
    // }

    public void nothing() {
        System.out.println("****************" + "******************");
    }
}
