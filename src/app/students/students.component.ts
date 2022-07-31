import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../models/student.model';
import { StudentsService } from '../students.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  retreivedStudents!: StudentModel[];

  constructor(private studentService: StudentsService, private location: Location) { }

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(): void{
    this.studentService.getAllStudents().subscribe(students => this.retreivedStudents = students);
    console.log('students retreived');
  }

  removeStudent(id: any): void{
    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        alert(`Student Deleted`);
        this.fetchStudents();
      },
      error: () =>{
        alert(`Error While deleting Student`)
      }
    })
  }

  goBack(): void{
    this.location.back();
  }


}
