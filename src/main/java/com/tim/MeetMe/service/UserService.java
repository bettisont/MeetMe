package com.tim.MeetMe.service;

import com.tim.MeetMe.User.User;

public interface UserService {
    User getUser(Integer userId);
    User createUser(User user);
    User updateUser(Integer userId, User user);
    void deleteUser(Integer userId);
    void addFriend(Integer userId, Integer friendId);
}
