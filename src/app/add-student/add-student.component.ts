import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { StudentModel } from '../models/student.model';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  createStudentForm = this.fb.group({
    name: [''],
    email: [''],
    phoneNumber: [''],
    cohort: [''],
  })

  constructor(
    private studentsService: StudentsService,
    private location: Location,
    private router: Router, 
    private fb: FormBuilder
  ) { }

  addStudent(): void{
    this.studentsService.addNewStudent(this.createStudentForm.value).subscribe({
      next: (res) =>{
        alert('Student Added Successfully');
        this.router.navigate(['/students']);
      },
      error: (err) =>{
        alert('Error encountered While adding The Student');
      }
    })
    console.log(`Student Added`);
    
  }

  goBack(): void{
    this.location.back();
  }

  ngOnInit(): void {
  }

}
