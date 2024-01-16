// // model



// const sql = require("../config/mysql");

// class User {
//     constructor(user) {
//         this.username = user.username;
//         this.password_hash = user.password_hash;
//         this.email = user.email;
//     }

//     create(result) {
//         sql.query("INSERT INTO users SET ?", this, (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(err, null);
//                 return;
//             }

//             console.log("created user: ", { id: res.insertId, ...this });
//             console.log('res', res);
//             result(null, { id: res.insertId, ...this });
//         });
//     }
// }

// module.exports = { User };



function modelCreate(result){
    console.log("entering to the create ")
    result(12);

}


modelCreate((damed)=>{console.log(da+++med+1)})