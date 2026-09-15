package com.ild.first;

public class Client {

//	Attributes
	private int id=0;
	private String name="";
	private String userName="";
	private String password="";
	
	
//	Constructors
	public Client() {
		super();
	}
	
	public Client(int id, String name, String userName, String password) {
		super();
		this.id = id;
		this.name = name;
		this.userName = userName;
		this.password = password;
	}
	
	
//	Getters and Setters
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

//	Methods

	@Override
	public String toString() {
		return "Client [id=" + id + ", name=" + name + ", userName=" + userName + ", password=" + password + "]";
	}
	
	
	
}
