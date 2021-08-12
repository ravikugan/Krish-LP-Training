package com.kugan.rentcloud.rentservice.service;

import java.util.List;

import com.kugan.rentcloud.model.rent.Rent;
import com.kugan.rentcloud.rentservice.model.DetailResponse;

public interface RentService {
    Rent save(Rent customer);

    Rent findById(int id);

    List<Rent> findAll();

    DetailResponse findDetailResponse(int id);
}
