package com.kugan.rentcloud.rentservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kugan.rentcloud.model.rent.Rent;
import com.kugan.rentcloud.rentservice.model.Response;
import com.kugan.rentcloud.rentservice.model.SimpleResponse;
import com.kugan.rentcloud.rentservice.service.RentService;

import lombok.Getter;

@RestController
@RequestMapping("/services/rents")
public class RentController {
    @Autowired
    RentService rentService;

    @PostMapping
    public Rent save(@RequestBody Rent rent) {
        return rentService.save(rent);
    }

    @GetMapping(value = "/{id}")
    public Response getRent(@PathVariable int id, @RequestParam(required = false) String type) {

        if(type==null){ 
            return  new SimpleResponse(rentService.findById(id));
        }else{
         return    rentService.findDetailResponse(id);
        }

    }

    @GetMapping
    public List<Rent> getAllRents() {
        return rentService.findAll();
    }
}
