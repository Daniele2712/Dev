package com.ild.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class LoginService {
	
	public boolean check(String uname, String pass) {
		String url="jdbc:mysql://localhost:3306/try";
		String user = "root";
		String password = "nec-PW4-sec";
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection(url, user, password);
			PreparedStatement pst = con.prepareStatement("select * from users where username=? and password=?");
			pst.setString(1, uname);
			pst.setString(2, pass);
			ResultSet rs = pst.executeQuery();
			if(rs.next()) {
				return true;
			}
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return false;
	}

}
