// Your code here
const createEmployeeRecord = function(element) {
    return {
        firstName: element[0],
        familyName: element[1],
        title: element[2],
        payPerHour: element[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
    
const createEmployeeRecords = function(elementData){
    return elementData.map(element => createEmployeeRecord(element));
    }

    let createTimeInEvent = function(employee, dateStamp){
        let [date, hour] = dateStamp.split(' ')
    
        employee.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour, 10),
            date,
        })
    
        return employee
    }
