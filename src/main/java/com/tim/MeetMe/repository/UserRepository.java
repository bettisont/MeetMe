package com.tim.MeetMe.repository;

import com.tim.MeetMe.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
