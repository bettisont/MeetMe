package com.tim.MeetMe.service;

import com.tim.MeetMe.repository.UserRepository;
import com.tim.MeetMe.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repository;

    @Override
    public User getUser(Integer userId) {
        return repository.findById(userId).get();
    }

    @Override
    public User createUser(User user) {
        return repository.save(user);
    }

    @Override
    public User updateUser(Integer userId, User user) {
        User userToUpdate = repository.findById(userId).get();
        userToUpdate.merge(user);
        return repository.save(userToUpdate);
    }

    @Override
    public void deleteUser(Integer userId) {
        User toDelete = repository.findById(userId).get();
        repository.delete(toDelete);
    }

    @Override
    public void addFriend(Integer userId, Integer friendId) {
        User user = repository.findById(userId).get();
        User friend = repository.findById(friendId).get();

        user.addFriend(friend);
        repository.save(user);
        repository.save(friend);
    }


}
