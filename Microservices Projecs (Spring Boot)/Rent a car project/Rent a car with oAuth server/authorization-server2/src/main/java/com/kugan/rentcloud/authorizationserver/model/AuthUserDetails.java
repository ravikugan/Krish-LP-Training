package com.kugan.rentcloud.authorizationserver.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.kugan.rentcloud.authorizationserver.model.User;

public class AuthUserDetails extends User implements UserDetails {
	
	public AuthUserDetails(User user) {
        super(user);
    }

    public AuthUserDetails() {

    }
	
	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		List<GrantedAuthority> grantAuthority = new ArrayList<>();
		
		getRoles().forEach(role -> {
            grantAuthority.add(new SimpleGrantedAuthority(role.getName()));
            role.getPermissions().forEach(permission -> {
                //add permissions to the same list
               grantAuthority.add(new SimpleGrantedAuthority(permission.getName()));
           });
        });

        return grantAuthority;
	}
	
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return super.getPassword();
	}
	
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return super.getUsername();
	}
	
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return super.isAccountNonExpired();
	}
	
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return super.isAccountNonLocked();
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return super.isCredentialsNonExpired();
	}
	
	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return super.isEnabled();
	}

}
