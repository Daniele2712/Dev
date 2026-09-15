package com.ild.first;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ClientRepository {

	Connection con = null;
	
	public ClientRepository() {
		String url="jdbc:mysql://localhost:3306/try";
		String username="root";
		String password="nec-PW4-sec";
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(url, username, password);
		} catch (ClassNotFoundException e) {
			System.out.println(e);
		} catch (SQLException e) {
			System.out.println(e);
		}
	}
	
	
	public List<Client> getClients(){
		
		List<Client> clients = new ArrayList<>();
		String sql = "select * from clients";
		Statement st;
		try {
			st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next()) {
				Client c = new Client(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4));
				clients.add(c);
			}
		} catch (SQLException e) {
			System.out.println(e);
		}
		
		
		return clients;
	}
	
	public Client getClient(int id) {
		String sql = "select * from clients where id="+id;
		Statement st;
		Client c = new Client();
		try {
			st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next()) {
				c.setId(rs.getInt(1)); 
				c.setName(rs.getString(2)); 
				c.setUserName(rs.getString(3)); 
				c.setPassword(rs.getString(4));
			}
		} catch (SQLException e) {
			System.out.println(e);
		}
		
		return c;
	}
	
	public void createClient(Client c) {
		
		String sql = "insert into clients values(?,?,?,?)";
		try 
		{
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, c.getId());
			st.setString(2, c.getName());
			st.setString(3, c.getUserName());
			st.setString(4, c.getPassword());
			st.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public void update(Client c) {
		String sql = "update clients set name=?, username=?, password=? where id=?";
		try 
		{
			PreparedStatement st = con.prepareStatement(sql);
			st.setString(1, c.getName());
			st.setString(2, c.getUserName());
			st.setString(3, c.getPassword());
			st.setInt(4, c.getId());
			st.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public void delete(int id) {
		String sql= "delete from clients where id="+id;
	}
	
}
