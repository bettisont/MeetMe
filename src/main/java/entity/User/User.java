package entity.User;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class User {


    @Id
    private Integer Id;

    @Column
    private String firstName;

    @Column
    private String surName;

    @Column
    private Integer age;

    @ManyToMany
    @JoinTable(name = "friends",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "friend_id"))
    private Set<User> friends;


    public User() {
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Set<User> getFriends() {
        return friends;
    }

    public void setFriends(Set<User> friends) {
        this.friends = friends;
    }

    public void merge(User user) {
        this.age = user.age;
        this.firstName = user.firstName;
        this.surName = user.surName;
        this.friends = user.friends;
    }
}
