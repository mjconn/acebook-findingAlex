package com.makersacademy.acebook.repository;

import com.makersacademy.acebook.model.SimplePost;
import org.springframework.data.repository.CrudRepository;

public interface SimplePostRepository extends CrudRepository<SimplePost, Long> {

}
