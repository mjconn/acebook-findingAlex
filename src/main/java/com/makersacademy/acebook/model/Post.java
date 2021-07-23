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
@Table(name = "POSTS")
public class Post {

    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    public @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    public String content;
    public String userName;
    public String date;
    public int likes;

    private Post() {}

    // public Post(String content) {
    //     this.setContent(content);
    //     this.setUserName("");
    //     this.setDate("");
    //     this.likes = 0;
    // }

    // public Post(String content, String userName) {
    //     this.setContent(content);
    //
    //
    //     this.setUserName(userName);
    //
    // }

    public Post(String content, String date, int likes, String userName) {
        this.setContent(content);
        this.setDate(date);
        this.setLikes(likes);
        this.setUserName(userName);
    }

    public Post(String content, String date, int likes, String userName, Long id) {
        this.setContent(content);
        this.setDate(date);
        this.setLikes(likes);
        this.setUserName(userName);
        this.setID(id);
    }

//     public void createDateTimeStamp() {
//     	DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
//     	LocalDateTime now = LocalDateTime.now();
// //    	System.out.println(dateTimeFormatter.format(now));
//
//         this.setDate(dateTimeFormatter.format(now));
//       }

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

  public Long getID() {
		return id;
	}

	public void setID(Long id) {
		this.id = id;
	}

  public int getLikes() {
		return likes;
	}

	public void setLikes(int likes) {
		this.likes = likes;
	}

}
//
