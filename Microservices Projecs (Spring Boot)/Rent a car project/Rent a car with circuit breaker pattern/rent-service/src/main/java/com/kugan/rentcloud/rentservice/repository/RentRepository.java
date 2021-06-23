package com.kugan.rentcloud.rentservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kugan.rentcloud.model.rent.Rent;

public interface RentRepository extends JpaRepository<Rent, Integer>{

}
