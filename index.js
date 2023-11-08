const employee = {
     name: "Rinad", 
     streetAddress: "1234 Main Way",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const copyEmployee = {...employee}
    copyEmployee[key]=value
    return copyEmployee
} 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    console.log(employee)
    employee[key]=value
    console.log(employee)
    return employee
}
function  deleteFromEmployeeByKey(employee, key){
    const copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}