const {body,validationResult}= require("express-validator");


const employeevalidation= [
     body("fullname")
     .notEmpty()
     .withMessage("fullname required"),

     body("username")
     .notEmpty()
     .withMessage("username is required")
     .isLength({min:3,max:20})
     .withMessage("username must be between 3 to 20 characters"),


     body("email")
     .notEmpty()
     .withMessage("email is required")
     .isEmail()
     .withMessage("please enter the valid email"),

     body("password")
     .notEmpty()
     .withMessage("password is required")


]

module.exports={
    employeevalidation
}