const { validationResult } = require("express-validator");
const EmployeeModel= require("../models/employee.model");
const createemployee= async (req,res,next) => {
    try {
        const error= validationResult(req);
        if(!error.isEmpty()){
            return res.status(400).json({
                error:error.array()
            })
        }
        const {fullname, username,email,password }= req.body;
         const existingemployee= await EmployeeModel.findOne({
             $or:[{email},{username}]
         })
         
         if(existingemployee){
            return res.status(400).json({
                message:"already in"
            })
         }


         const employee= await EmployeeModel.create({
            fullname,
            username,
            email,
            password
         })
        
         res.status(201).json({
            message:"employee created successfully",
            employee
         })

    } catch (error) {
        next(error)
    }
} 

const getemployee = async (req,res,next) => {
     try {
        const employee= await EmployeeModel.find().select("-password");
        if(employee.length===0){
            return res.status(400).json({
                message:"employee not found"
            })
        }
        res.status(200).json({
            message:"employee fetch successfull",
            employee
        })
     } catch (error) {
        next(error)
     }
}

module.exports={
    createemployee,
    getemployee
}