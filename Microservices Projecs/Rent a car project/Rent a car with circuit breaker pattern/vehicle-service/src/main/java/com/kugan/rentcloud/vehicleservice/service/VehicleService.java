package com.kugan.rentcloud.vehicleservice.service;

import java.util.List;

import com.kugan.rentcloud.model.vehicle.Vehicle;

public interface VehicleService {
	Vehicle save(Vehicle vehicle);
	Vehicle findById(int id);
	List<Vehicle> findAll();
}
