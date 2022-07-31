import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "students", component: StudentsComponent},
  {path: "student/find/:id", component: StudentDetailsComponent},
  {path: "create", component: AddStudentComponent},
  {path: "student/update/:id", component: UpdateStudentComponent},
  {path: "student/:id/bank-info/add", component: BankDetailsComponent}
]



@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
