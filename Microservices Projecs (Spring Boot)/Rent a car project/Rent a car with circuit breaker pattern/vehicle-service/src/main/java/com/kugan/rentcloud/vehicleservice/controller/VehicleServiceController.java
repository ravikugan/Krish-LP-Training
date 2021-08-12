package com.kugan.rentcloud.vehicleservice.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kugan.rentcloud.model.vehicle.Vehicle;
import com.kugan.rentcloud.vehicleservice.service.VehicleService;

@RestController
@RequestMapping("services/vehicles")
public class VehicleServiceController {
	 	@Autowired
	    VehicleService vehicleService;

	    @PostMapping
	    public Vehicle save(@RequestBody Vehicle vehicle) {
	        return vehicleService.save(vehicle);
	    }

	    @GetMapping(value = "/{id}")
	    public Vehicle getVehicle(@PathVariable int id)
	    {
	        System.out.println("request came on "+LocalDateTime.now() + "  ++++++++++++++++++++++");
	        return vehicleService.findById(id);
	    }

	    @GetMapping
	    public List<Vehicle> getAllVehicles() {
	        return vehicleService.findAll();
	    }
}
