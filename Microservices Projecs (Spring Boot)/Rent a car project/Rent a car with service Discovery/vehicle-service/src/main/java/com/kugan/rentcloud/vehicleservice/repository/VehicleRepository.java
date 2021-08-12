package com.kugan.rentcloud.vehicleservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kugan.rentcloud.model.vehicle.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
	
}
