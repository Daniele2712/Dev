package com.ild.jwt.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ild.jwt.dao.RoleDao;
import com.ild.jwt.dao.UserDao;
import com.ild.jwt.entity.Role;
import com.ild.jwt.entity.User;

@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private RoleDao roleDao;
	
	public User registerNewUser(User user) {
		return userDao.save(user);
	}
	
	public void initRolesAndUser() {
		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDescription("Admin role");
		roleDao.save(adminRole);
		
		Role userRole = new Role();
		userRole.setRoleName("User");
		userRole.setRoleDescription("Default role for newly created record");
		roleDao.save(userRole);
		
		User adminUser = new User();
		adminUser.setUserName("admin");
		adminUser.setUserFirstName("admin");
		adminUser.setUserLastName("admin123");
		adminUser.setUserPassword("admin@pass");
		Set<Role> adminRoles = new HashSet<>();
		adminRoles.add(adminRole);
		adminUser.setRole(adminRoles);
		userDao.save(adminUser);
		
		User user = new User();
		user.setUserName("firstUser");
		user.setUserFirstName("first");
		user.setUserLastName("user123");
		user.setUserPassword("user@pass");
		Set<Role> userRoles = new HashSet<>();
		userRoles.add(userRole);
		user.setRole(userRoles);
		userDao.save(user);
	}
}
