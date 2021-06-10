package com.krishantha.training.salesmanager.service;

import java.util.List;

import com.krishantha.training.salesmanager.model.Employee;
import com.krishantha.training.salesmanager.repository.EmployeeRepository;

public interface EmployeeService {

	List<Employee> getAllEmployees();
	void setEmployeeRepository(EmployeeRepository employeeRepository);

}