package com.kugan.rentcloud.rentservice.service;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.kugan.rentcloud.model.customer.Customer;
import com.kugan.rentcloud.model.rent.Rent;
import com.kugan.rentcloud.model.vehicle.Vehicle;
import com.kugan.rentcloud.rentservice.hystrix.CommonHystrixCommand;
import com.kugan.rentcloud.rentservice.hystrix.VehicleCommand;
import com.kugan.rentcloud.rentservice.model.DetailResponse;
import com.kugan.rentcloud.rentservice.repository.RentRepository;
import com.netflix.hystrix.HystrixCommand;

@Service
public class RentServiceImpl implements RentService {
	@Autowired
    RentRepository rentRepository;
	
	@Autowired
	HystrixCommand.Setter setter;

	@LoadBalanced //RibbonClient annotation can also be used but loadBalanced is the correct one.
    @Bean
    RestTemplate getRestTemplate(RestTemplateBuilder builder){
        return builder.build();
    }

    @Autowired
    RestTemplate restTemplate;


    @Override
    public Rent save(Rent customer) {
        return rentRepository.save(customer);
    }


    @Override
    public Rent findById(int id) {
        Optional<Rent> rent = rentRepository.findById(id);

        if (rent.isPresent())
            return rent.get();
        else
            return new Rent();

    }


    @Override
    public List<Rent> findAll() {
        return rentRepository.findAll();
    }

    @Override
    public DetailResponse findDetailResponse(int id) throws InterruptedException, ExecutionException  {


        Rent rent=findById(id);
        Customer customer=getCustomer(rent.getCustomerId());
        Vehicle vehicle= getVehicle(rent.getVehicleId());

        return new DetailResponse(rent,customer,vehicle);


    }

    private Customer getCustomer(int customerId) throws InterruptedException, ExecutionException{
    	
    	CommonHystrixCommand<Customer> commonHystrixCommand = new CommonHystrixCommand<Customer>(setter,()->{
    		return restTemplate.getForObject("http://customer/services/customers/"+customerId,Customer.class);
    	},()->{
    		return new Customer();
    	});
    	
    	Future<Customer> customerFuture = commonHystrixCommand.queue();
    	return customerFuture.get();
    	
    														//Use the application name when working with service discovery.
       // Customer customer=restTemplate.getForObject("http://customer/services/customers/"+customerId,Customer.class);
        //return customer;

    }

    private Vehicle getVehicle(int vehicleId){
    														//Use the application name when working with service discovery.
    	VehicleCommand vehicleCommand = new VehicleCommand(restTemplate, vehicleId);
    	return vehicleCommand.execute();
    	
       //return restTemplate.getForObject("http://vehicle/services/vehicles/"+vehicleId,Vehicle.class);


    }
}
