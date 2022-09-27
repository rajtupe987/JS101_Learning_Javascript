//Given stored username and password and input username and password, Print if the user can login or not.


let user_name="rajtupe@123";
let res_pass="321456";

let ent_user="rajtupe@123";
let ent_pass="321456";

if(user_name==ent_user){
  if(res_pass==ent_pass){
    console.log("Loged in");
  }else{
    console.log("Incorrect password");
  }
}else{
  console.log("Incorrect user");
}