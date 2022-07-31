import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, of  } from 'rxjs';
import { StudentBankInfoModel } from './models/studentBankInfo.model';

@Injectable({
  providedIn: 'root'
})
export class StudentBankInfoService {

  private Base_URL = "http://localhost:4000/bank-info"
  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  addStudentBankInfo(bankInfo: StudentBankInfoModel): Observable<StudentBankInfoModel | any>{
    return this.http.post<StudentBankInfoModel>(`${this.Base_URL}/add`, bankInfo, this.HTTP_HEADER).pipe(
      tap((data) => {
        console.log(`Bank Details Successfully Added `);
      })
    )
  }

  // getStudentBankInfo(id: any): Observable<StudentBankInfoModel>{
  //   return this.http.get<StudentBankInfoModel>(`${this.Base_URL}/find/${id}`).pipe(
  //     tap((data) => {
  //       console.log(`This Bank Info was Received: ${data}`),

  //       catchError(error => of([]))
  //     })
  //   );
  // }
  
  getStudentBankInfo(id: any): Observable<any>{
    return this.http.get<any>(`${this.Base_URL}/find/${id}`).pipe(
      tap((data) => {
        console.log(`This Bank Info was Received: ${data}`),

        catchError(error => of({}))
      })
    );
  }



}
