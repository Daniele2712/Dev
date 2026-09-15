package com.ild;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ild.service.LoginService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class LoginController {
	
	@RequestMapping("/login")
	public ModelAndView checkUser(HttpServletRequest request, HttpServletResponse response) {
		
		ModelAndView mv = new ModelAndView();
		
		String uname = request.getParameter("uname");
		String pass = request.getParameter("pass");
		
		if(new LoginService().check(uname, pass)) {
			mv.addObject("uname", uname);
			mv.setViewName("success.jsp");
		}
		else {
			mv.setViewName("login.jsp");
		}
		
		return mv;
	} 

}
