import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentModel } from '../models/student.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  retreivedStudent!:StudentModel;

  constructor(private studentsService: StudentsService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  fetchStudentById(id: string): void{
    this.studentsService.getStudentById(id).subscribe(student => this.retreivedStudent = student);
    console.log('student retreived');
  }

  removeStudent(id: any): void{
    this.studentsService.deleteStudent(id).subscribe({
      next: (res) => {
        alert(`Student Deleted`);
        this.router.navigate(['/students']);
      },
      error: () =>{
        alert(`Error While deleting Student`)
      }
    })
  }

  goBack(): void{
    this.location.back();
  }

  ngOnInit(): void {
    this.fetchStudentById(this.route.snapshot.params["id"])
  }

}
