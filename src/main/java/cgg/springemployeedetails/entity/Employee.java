package cgg.springemployeedetails.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

	@Id
	private int employeeId;
	
	private String name;
    
    private String fatherName;
    private double salary;
    private String previousExperience;
    private int  yearsOfExperience;
    private int monthsOfExperience;
    private String  designation;
    
    
}
