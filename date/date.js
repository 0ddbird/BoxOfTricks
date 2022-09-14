const myDate = new Date()

// console.log(myDate, myDate.getDate(), myDate.getDay(), myDate.getFullYear())
// console.log('GMT', myDate.getHours())
// console.log('UTC', myDate.getUTCHours())

// https://stackoverflow.com/questions/4413590/javascript-get-array-of-dates-between-2-dates


// ------------------------------------------------------------------------
// Adding 2 methods to the Date prototype
Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

Date.prototype.substractDays = function(days) {
  let date = new Date(this.valueOf())
  date.setDate(date.getDate() - days)
  return date
}

// ------------------------------------------------------------------------
function getCurrentMonthDays(startDate, stopDate) {
  const dateArray = []
  let currentStartDate = startDate
  
  while (currentStartDate < stopDate) {
    dateArray.push(new Date(currentStartDate))
    currentStartDate = currentStartDate.addDays(1)
  }
  
  return dateArray
}

function fillDaysFromPreviousMonth(startDate) {
  const dateArray = []
  let currentStartDate = startDate.substractDays(1)

  for (let i = currentStartDate.getDay(); i >= 0 ; i--) {
    dateArray.push(new Date(currentStartDate))
    if (new Date(currentStartDate).getDay() === 0) {
      dateArray.reverse()
      break
    }
    currentStartDate = currentStartDate.substractDays(1)
  }
  return dateArray
}

function fillDaysFromNextMonth(stopDate) {
  const dateArray = []
  let currentStopDate = stopDate

   while (currentStopDate.getDay() !== 6) {
    dateArray.push(new Date(currentStopDate))
    currentStopDate = currentStopDate.addDays(1)
  }
  dateArray.push(new Date(currentStopDate))

  return dateArray
}

function getDates(year, month) {
  
  // Months are indexed from 0
  const startDate = new Date(year, month, 1)
  const stopDate = new Date(year, month + 1, 0)

  console.log('Start Date is: ', startDate.toString(), '\nStop Date is:', stopDate.toString())
  const daysFromPreviousMonth = fillDaysFromPreviousMonth(startDate, stopDate)
  const daysFromCurrentMonth = getCurrentMonthDays(startDate, stopDate)
  const daysFromNextMonth = fillDaysFromNextMonth(stopDate)

  const result = daysFromPreviousMonth.concat(daysFromCurrentMonth, daysFromNextMonth)
  
  return result
} 

let dateRange = getDates(1990, 8)
console.log(dateRange)
