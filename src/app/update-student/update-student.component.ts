import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentModel } from '../models/student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  retreivedStudent!: StudentModel;
  updateStudentForm!: FormGroup;

  // this.updateStudentForm = new FormGroup({
  //     firstName: new FormControl()

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getStudentForEditing(){
    this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe(student => {
      this.retreivedStudent = student;
      this.updateStudentForm = new FormGroup({
        name: new FormControl(this.retreivedStudent.name),
        email: new FormControl(this.retreivedStudent.email),
        phoneNumber: new FormControl(this.retreivedStudent.phoneNumber),
        cohort: new FormControl(this.retreivedStudent.cohort)
      });
    });
  }

  updateStudent(): void{
    this.studentsService.updateStudent(this.route.snapshot.params["id"], this.updateStudentForm.value).subscribe({
      next: (res) => {
        alert('Student Updated Successfully');
        this.router.navigate(['/students'])
      },

    })
  }

  goBack(): void{
    this.location.back();
  }

  ngOnInit(): void {
    this.getStudentForEditing();
  }

}
