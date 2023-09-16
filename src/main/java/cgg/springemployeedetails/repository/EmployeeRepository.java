package cgg.springemployeedetails.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cgg.springemployeedetails.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

}
