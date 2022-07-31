import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { StudentModel } from './models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

private Base_URL = "http://localhost:4000/students"
private HTTP_HEADER = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

constructor(private http: HttpClient) { }

addNewStudent(student: StudentModel): Observable<StudentModel | any>{
  return this.http.post<StudentModel>(`${this.Base_URL}/create`, student, this.HTTP_HEADER).pipe(
      tap(newStudent =>{
        console.log(`New Student Added Successfully.`)
      }),
      // catchError(error => of(new StudentModel()))
  )
}


  getAllStudents(): Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(this.Base_URL).pipe(
      tap((data) => {
        console.log(`Students retreived`),

        catchError(error => of([]))
      })
    );
  }
  
  getStudentById(id: any): Observable<StudentModel>{
    return this.http.get<StudentModel>(`${this.Base_URL}/find/${id}`).pipe(
      tap((data) => {
        console.log(`Retreived Student is ${JSON.stringify(data)}`),

        catchError(error => of([]))
      })
    );
  }

  updateStudent(id: string, student: StudentModel): Observable<StudentModel>{
    return this.http.put<StudentModel>(`${this.Base_URL}/update/${id}`, student, this.HTTP_HEADER).pipe(
      tap(updatedStudent =>{
        console.log(`Student Updated Successfully`);
        
      }),
      // catchError(error => of(new StudentModel()))
    )
  }

  deleteStudent(id: string){
    return this.http.delete<StudentModel>(`${this.Base_URL}/remove/${id}`, this.HTTP_HEADER).pipe(
      tap(deleteStudent =>{
        console.log(`Student Deleted Successfully`);
        
      }),
      // catchError(error => of(new StudentModel()))
    )
  }



}
