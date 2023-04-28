package service;

import entity.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import repository.UserRepository;

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
}
