import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentBankInfoService } from '../student-bank-info.service';
import { StudentsService } from '../students.service';
import { StudentModel } from '../models/student.model';
import { StudentBankInfoModel } from '../models/studentBankInfo.model';
import { Location } from '@angular/common';
import { param } from 'express-validator';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  retreivedStudent!: StudentModel;
  bankInfo!: StudentBankInfoModel;


  //********* BANK INFO FORM **********//
  addStudentBankForm = this.fb.group({
    accountNum: [''],
    bank: [''],
    branch: [''],
    accountType: [''],
    status: [''],
    studentId: [`${this.route.snapshot.params["id"]}`],
  })

  constructor(
    private studentsService: StudentsService,
    private studentBankInfoService: StudentBankInfoService,
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  // fetchStudentBankInfoById(id: string): void{
  //   this.studentsService.getStudentById(id).subscribe(student => this.retreivedStudent = student);
  //   console.log(`student retreived. Student ID#: ${this.retreivedStudent._id}`);

  //   this.studentBankInfoService.getStudentBankInfo(id).subscribe(info => this.bankInfo = info);
  //   console.log('Student Bank Information retreived');
  // }

  //********* FIND STUDENT FUNCTION **********//
  findStudentId(id: string): void {
    this.studentsService.getStudentById(id).subscribe(student => this.retreivedStudent = student);
    console.log(`student retreived. Student ID#: ${this.retreivedStudent}`);

    // this.checkForExistingBankInfo(id);
  }

  checkForExistingBankInfo(id: string){
    this.studentBankInfoService.getStudentBankInfo(id).subscribe(bankInfo => this.bankInfo = bankInfo);
    console.log(`${this.bankInfo}`);
    
    // console.log(`${this.retreivedStudent.name}'s banking information retreived.`);
    
  }

  //********* SAVE STUDENT BANK INFO FUNCTION **********//
  addStudentBankInfo(): void{
    this.studentBankInfoService.addStudentBankInfo(this.addStudentBankForm.value).subscribe({
      next: (res) => {
        console.log(`Student Bank Info Added Succcessfully!!`); 
      },
      error: (err) =>{
        alert('Error encountered While adding The Student Bank Info');
      }
    })
  }

  //********* GO BACK FUNCTION **********//
  goBack(): void{
    this.location.back();
  }

  ngOnInit(): void {
    this.findStudentId(this.route.snapshot.params["id"]);
    this.checkForExistingBankInfo(this.route.snapshot.params["id"]);
  }

}
