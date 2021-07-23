package com.makersacademy.acebook.model;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GenerationType;
// import java.time.format.DateTimeFormatter;
// import java.time.LocalDateTime;
// import java.util.Date;

import lombok.Data;

@Data
@Entity
@Table(name = "SIMPLEPOSTS")
public class SimplePost {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  public String content;

  private SimplePost() {}

  public SimplePost(String content) {
    this.content = content;
  }

}
