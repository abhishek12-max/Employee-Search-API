const express= require("express");

const router= express.Router();
const employeecontroller= require("../controller.js/employee.controller.js");
const {employeevalidation}= require("../validator/employee.validator.js")

router.post("/employee",employeevalidation,employeecontroller.createemployee);
router.get("/employee",employeecontroller.getemployee);
router.get("/employee/search",employeecontroller.searchemployee);
router.get("/employee/paginate",employeecontroller.employeepaginate);
module.exports= router;