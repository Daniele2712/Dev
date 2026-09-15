package com.ild.jwt.service;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

//import com.ild.jwt.dao.UserDao;
//import com.ild.jwt.util.JwtUtil;

@Service
public class JwtService implements UserDetailsService{

//	@Autowired
//	private UserDao userDao;
//	
//	@Autowired
//	private JwtUtil jwtUtil;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

}
