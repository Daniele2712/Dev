package com.ild.first;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientResource {

	@GetMapping("clients")
	public List<Client> getClients(){
		
		ClientRepository repo = new ClientRepository();
		List<Client> clients = repo.getClients();
		
		return clients;
	}
}
