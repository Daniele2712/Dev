package com.ild.jwt.auth;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.ild.jwt.service.JwtService;

@RestController
@CrossOrigin
public class AuthenticationController {

//	@Autowired
//	private JwtService jwtService;
	
	@PostMapping({"/authenticate"})
	public void createJwtToken(@RequestBody AuthenticationRequest authRequest) {
		
	}
}
