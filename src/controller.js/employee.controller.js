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

const searchemployee= async (req,res,next) => {
    try {
         const name= req.query.name
    if(!name){
        return res.status(400).json({
            message:"search keyword is required"
        })
    }

    const employee= await EmployeeModel.find({
        fullname:{
            $regex:name,
            $options:"i"
        }
    }).select("-password")
     if(employee.length===0){
        return res.status(404).json({
            message:"employee not found"
        })
     }
    res.status(200).json({
        message:"employee search successfull",
        employee
    })
    } catch (error) {
        next(error)
    }
   
}

const employeepaginate= async (req,res,next) => {
  try {
       const  page= Number(req.query.page)||1;
   const  limit= Number(req.query.limit)||10

    if (page < 1 || limit < 1) {
    return res.status(400).json({
        message: "Page and limit must be greater than 0"
    });
}
    const skip= (page-1)*limit;

    const employee= await EmployeeModel.find().skip(skip).limit(limit).select("-password")
     if(employee.length===0){
        return res.status(404).json({
            message:"not found"
        })
     }
     res.status(200).json({
        message:"employee fetch sucessfull",
        employee
     })
  } catch (error) {
     next(error)
  }
  
}

const employeesort= async (req,res,next) => {
    try {
         const sort = req.query.sort || "createdAt";
         const order = req.query.order || "desc";
         let sortorder =-1;
         if(order==="asc"){
            sortorder=1
         }else{
            sortorder;
         }
        const employee= await EmployeeModel.find().sort({
            [sort]:sortorder
        })
       if(employee.length===0){
           return res.status(400).json({
            message:"not found"
           })
       }
    } catch (error) {
        next(error)
    }
}

module.exports={
    createemployee,
    getemployee,
    searchemployee,
    employeepaginate,
    employeesort
}