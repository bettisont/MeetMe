package service;

import entity.User.User;

public interface UserService {
    User getUser(Integer userId);
    User createUser(User user);
    User updateUser(Integer userId, User user);
}
