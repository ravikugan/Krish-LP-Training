package com.kugan.rentcloud.authorizationserver.model;
import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name="permission")
@Data
public class Permission {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "name")
    private String name;
}
