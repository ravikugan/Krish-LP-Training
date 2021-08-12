package com.krishantha.rentacar.demoapplication.repository;
import org.springframework.data.jpa.repository.JpaRepository;


import com.krishantha.rentacar.demoapplication.model.Student;

public 	interface StudentRepository extends JpaRepository<Student,Integer> {
	//Student save(Student student);
}
