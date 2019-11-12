package com.wafi.authentication.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    @Transient
    private String passwordConfirmation;
    @Column(updatable=false)
    private Date createdAt;
    private Date updatedAt;
    
    public User() {
    }
    public User(String email, String password, String confirm) {
    	this.email = email;
    	this.password = password;
    	this.passwordConfirmation = confirm;
    }
    
    
    // other getters and setters removed for brevity
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    
    public Long getId () {
    	return this.id;
    }
    
    public String getPassword () {
    	return this.password;
    }
    
    public void setPassword (String password) {
    	this.password = password;
    }
    
    public String getEmail () {
    	return this.email;
    }
    
    public void setEmail (String email) {
    	this.email = email;
    }
}
