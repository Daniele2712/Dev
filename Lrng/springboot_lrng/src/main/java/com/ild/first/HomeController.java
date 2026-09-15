package com.ild.first;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping("home")
	public ModelAndView home(Client client) {
		
		ModelAndView mv = new ModelAndView();
		mv.addObject("client", client);
		mv.setViewName("home");
		
		return mv;
	}
}
