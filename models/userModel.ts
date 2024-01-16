import { Result } from "express-validator";
import sql from "../config/mysql";
import { OkPacket } from "mysql";
import { promises } from "dns";

interface IUser {
    username: string,
    passwordHash: string,
    email: string
}

type TError= null|Error|{message:string};

// constructor

class User {
    private username: string;
    private passwordHash: string;
    private email: string;

    constructor(user: IUser) {
        this.username = user.username;
        this.passwordHash = user.passwordHash;
        this.email = user.email;
    }

    createUser(result: (err: TError, data: any | null) => void): void {
        sql.query("INSERT INTO users SET ?", this, (err: TError, res: any) => {
            if (err) {
                result(err, null);
                return;
            }

            result(null, { id: res.insertId, ...this });
        });
    }


    static  UserExist(userName: string, email: string, result: (err: TError, data: any | null) => void): void {
        sql.query("SELECT username,email FROM users WHERE username = ? OR email = ?", [userName, email], (err: TError, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length>0) {
                for (const existingUser of res) {
                    if (existingUser.username === userName && existingUser.email === email) {
                        result({ message: "Username and email already exist" }, null);
                        return;
                    } else if (existingUser.username === userName) {
                        result({ message: "Username already exists" }, null);
                        return;
                    } else if (existingUser.email === email) {
                        result({ message: "Email already exists"}, null);
                        return;
                    }
                }
            } else {
                result({ message: "User does not exist" }, 1);
            }
        });
    }

    static findUserById(id: number, result: (err: TError, data: any | null) => void): void {
        sql.query(`SELECT * FROM users WHERE userId = ${id} `, (err: TError, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0])
            }
            else {
                result({ message: "not found" }, null)
            }
        });

    };
    static findUserByName(userName: string, result: (err: TError, data: any | null) => void): void {
        sql.query(`SELECT * FROM users WHERE username = ?`, [userName], (err: TError, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, res[0])
            }
            else {
                result({ message: "enter correct User Name" }, null)
            }
        });

    };





    // Tutorial.findById = (id, result) => {
    //   sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
    //     if (err) {
    //       console.log("error: ", err);
    //       result(err, null);
    //       return;
    //     }

    //     if (res.length) {
    //       console.log("found tutorial: ", res[0]);
    //       result(null, res[0]);
    //       return;
    //     }

    //     // not found Tutorial with the id
    //     result({ kind: "not_found" }, null);
    //   });
    // };

    // Tutorial.getAll = (title, result) => {
    //   let query = "SELECT * FROM tutorials";

    //   if (title) {
    //     query += ` WHERE title LIKE '%${title}%'`;
    //   }

    //   sql.query(query, (err, res) => {
    //     if (err) {
    //       console.log("error: ", err);
    //       result(null, err);
    //       return;
    //     }

    //     console.log("tutorials: ", res);
    //     result(null, res);
    //   });
    // };

    // Tutorial.getAllPublished = result => {
    //   sql.query("SELECT * FROM tutorials WHERE published=true", (err, res) => {
    //     if (err) {
    //       console.log("error: ", err);
    //       result(null, err);
    //       return;
    //     }

    //     console.log("tutorials: ", res);
    //     result(null, res);
    //   });
    // };

    // Tutorial.updateById = (id, tutorial, result) => {
    //   sql.query(
    //     "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    //     [tutorial.title, tutorial.description, tutorial.published, id],
    //     (err, res) => {
    //       if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //         return;
    //       }

    //       if (res.affectedRows == 0) {
    //         // not found Tutorial with the id
    //         result({ kind: "not_found" }, null);
    //         return;
    //       }

    //       console.log("updated tutorial: ", { id: id, ...tutorial });
    //       result(null, { id: id, ...tutorial });
    //     }
    //   );
    // };

    // Tutorial.remove = (id, result) => {
    //   sql.query("DELETE FROM tutorials WHERE id = ?", id, (err, res) => {
    //     if (err) {
    //       console.log("error: ", err);
    //       result(null, err);
    //       return;
    //     }

    //     if (res.affectedRows == 0) {
    //       // not found Tutorial with the id
    //       result({ kind: "not_found" }, null);
    //       return;
    //     }

    //     console.log("deleted tutorial with id: ", id);
    //     result(null, res);
    //   });
    // };

    // Tutorial.removeAll = result => {
    //   sql.query("DELETE FROM tutorials", (err, res) => {
    //     if (err) {
    //       console.log("error: ", err);
    //       result(null, err);
    //       return;
    //     }

    //     console.log(`deleted ${res.affectedRows} tutorials`);
    //     result(null, res);
    //   });
    // };

    // module.exports = User;
}
export { IUser, User }