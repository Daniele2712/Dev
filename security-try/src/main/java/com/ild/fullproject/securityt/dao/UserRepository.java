package com.ild.fullproject.securityt.dao;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ild.fullproject.securityt.entity.User;

public interface UserRepository extends JpaRepository<User, UUID>{
	
	Optional<User> findByEmail(String email);
}
