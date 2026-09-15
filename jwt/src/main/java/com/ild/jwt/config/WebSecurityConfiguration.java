package com.ild.jwt.config;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration {
	
	@Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
	
//	@Autowired
//	private JwtRequestFilter jwtRequestFilter;
	
	@Autowired
    private UserDetailsService userDetailsService;
	
	@SuppressWarnings("removal")
	@Bean
	AuthenticationManager authenticationManagerBean(AuthenticationManagerBuilder builder) throws Exception {
		return builder.userDetailsService(userDetailsService).passwordEncoder(encoder()).and().build();
    
	}
	
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(requests -> {
					try {
                        requests.requestMatchers("/authenticate", "/registerNewUser").permitAll()
                                .requestMatchers(HttpHeaders.ALLOW).permitAll()
                                .anyRequest().authenticated();
                                
                                
					} catch (Exception e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				})
    ;
        httpSecurity.sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .exceptionHandling(handling -> handling.authenticationEntryPoint(jwtAuthenticationEntryPoint))
        ;

			
		return httpSecurity.build();
	}
	
	@Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }
}
