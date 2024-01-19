import sql from "../config/mysql";
export interface IEnroll {
    courseId: number;
    userId: number;
}


type TError = null | Error | { message: string,code:string} ;


export class Enroll {
    private courseId: number;
    private userId;
    constructor(enroll: IEnroll) {
        this.courseId = enroll.courseId;
        this.userId = enroll.userId;
    }
    Enrolling(result: (err: TError, data: any | null) => void): void {
        sql.query("INSERT INTO enrolls SET ?", this, (err: Error | null, res: any) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            // console.log("created user: ", { id: res.insertId, ...this });
            // console.log('res', res)
            result(null, this);
        });
    }
    static UserEnrolledIn(userId: number, result: (err: TError, data: any) => void): void {
        sql.query("SELECT * FROM enrolls WHERE userId = ?", [userId], (err: TError, res: any) => {
            if (err) {
                result(err, null);
            }
            else {
                result(null, res)
            }
        })
    }
    static CourseEnroller(courseId: number, result: (err: TError, data: any) => void): void {
        sql.query("SELECT * FROM enrolls WHERE courseId = ?", [courseId], (err: TError, res: any) => {
            if (err) {
                result(err, null);
            }
            else {
                result(null, res)
            }
        })
    }
    CheckEnrolledOrNot(result: (err: TError, res: any) => void): void {
        sql.query("SELECT * FROM enrolls WHERE userId = ? AND courseId = ?", [this.userId,this.courseId], (err: TError, res: any) => {
            if (err) {
                result(err, null);
            }
            else {
                if(res.length>0){
                    result(null, res.enrollId);
                }
                else{
                    result(null,0);
                }
            }
        })
    }
}

