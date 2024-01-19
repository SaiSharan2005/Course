import { Enroll, IEnroll } from "../models/enrollModel"
import { Response, Request } from "express";

type TError = null | Error | { message: string ,code:string};

interface IEnrollResponse {
    success: boolean;
    message: string;
}

export const enrollment = async (req: Request, res: Response) => {
    if (!req.body) {
        const response = {
            success: false,
            message: "Content can not be empty!"
        };
        res.status(400).json(response);
        return;
    }

    const newEnroll: Enroll = new Enroll({
        courseId: req.body.courseId,
        userId: req.body.userId
    })
    newEnroll.Enrolling((err: TError, result: any) => {
        if (err) {
            
            const response: IEnrollResponse = {
                success: false,
                message:  "you are alredy enrolled in this course"
            }
            return res.status(500).json(response);
        }
        else {
            const response: IEnrollResponse = {
                success: true,
                message: "Enrolled Successfully"
            };
            return res.status(200).json(response);
        }
    })
}


export const getUserCourses = async (req: Request, res: Response) => {
    if (!req.body) {
        const response = {
            success: false,
            message: "Content can not be empty!"
        };
        res.status(400).json(response);
        return;
    }


    Enroll.UserEnrolledIn(req.body.userId,(err: TError, result: any) => {
        if (err) {
            const response: IEnrollResponse = {
                success: false,
                message: err.message || "somethign went wrong at server side"
            }
            return res.status(500).json(response);
        }
        else {

            const response = {
                success: true,
                courses:result
            };
            return res.status(200).json(response);

        }
    })
}

export const getCourseUser = async (req: Request, res: Response) => {
    if (!req.body) {
        const response = {
            success: false,
            message: "Content can not be empty!"
        };
        res.status(400).json(response);
        return;
    }


    Enroll.CourseEnroller(req.body.courseId,(err: TError, result: any) => {
        if (err) {
            const response: IEnrollResponse = {
                success: false,
                message: err.message || "somethign went wrong at server side"
            }
            return res.status(500).json(response);
        }
        else {

            const response = {
                success: true,
                courses:result
            };
            return res.status(200).json(response);

        }
    })
}