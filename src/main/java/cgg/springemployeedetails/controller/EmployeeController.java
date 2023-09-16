package cgg.springemployeedetails.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cgg.springemployeedetails.entity.Employee;
import cgg.springemployeedetails.repository.EmployeeRepository;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeRepository emprepo;
	
	@GetMapping("/allemployees")
	private ResponseEntity<List<Employee>> getAllEmployees(){
		List<Employee> list = emprepo.findAll();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<String> addEmployee(@RequestBody Employee employee){
		emprepo.save(employee);
		String s="Successfully uploaded";
		return new ResponseEntity<>(s,HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id){
		emprepo.deleteById(id);
		String s="Successfully deleted";
		return new ResponseEntity<>(s,HttpStatus.OK);
	}
}
