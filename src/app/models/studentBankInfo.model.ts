

export class StudentBankInfoModel{

    accountNum?: Number;
    bank?: string;
    branch?: string;
    accountType?: string;
    status?: string;
    studentId?: string;


    constructor(accountNum: Number, bank: string, branch: string, accountType: string, status: string, studentId: string){
        this.accountNum = accountNum;
        this.bank = bank;
        this.branch = branch;
        this.accountType = accountType;
        this.status = status;
        this.studentId = studentId;
    }


}