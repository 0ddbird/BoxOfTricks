import {domDisplay} from '../utils/utils.js'

// Adding 2 methods to the Date prototype

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

Date.prototype.substractDays = function (days) {
  const date = new Date(this.valueOf())
  date.setDate(date.getDate() - days)
  return date
}

domDisplay(`Yesterday was : ${new Date().substractDays(1)}`)
domDisplay(`Today is : ${new Date()}`)
domDisplay(`Tomorrow will be : ${new Date().addDays(1)}`)
domDisplay(`In 3 days we will be : ${new Date().addDays(3)}`)


function getCurrentMonthDays (startDate, stopDate) {
  const dateArray = []
  let currentStartDate = startDate

  while (currentStartDate <= stopDate) {
    dateArray.push(new Date(currentStartDate))
    currentStartDate = currentStartDate.addDays(1)
  }
  return dateArray
}

function fillDaysFromPreviousMonth (startDate) {
  const dateArray = []
  let currentStartDate = startDate.substractDays(1)

  for (let i = currentStartDate.getDay(); i >= 0; i--) {
    dateArray.push(new Date(currentStartDate))
    if (new Date(currentStartDate).getDay() === 0) {
      dateArray.reverse()
      break
    }
    currentStartDate = currentStartDate.substractDays(1)
  }
  return dateArray
}

function fillDaysFromNextMonth (stopDate) {
  const dateArray = []
  let currentStopDate = stopDate

  for (let i = currentStopDate.getDay(); i <= 6; i++) {
    dateArray.push(new Date(currentStopDate))
    currentStopDate = currentStopDate.addDays(1)
  }
  return dateArray
}

function getDates (year, month) {
  // Months are indexed from 0
  let previousMonthDays, nextMonthDays

  const startDate = new Date(year, month, 1)
  const stopDate = new Date(year, month + 1, 0)
  if (startDate.getDay() !== 0) previousMonthDays = fillDaysFromPreviousMonth(startDate, stopDate)
  const currentMonthDays = getCurrentMonthDays(startDate, stopDate)
  // console.log(stopDate)
  if (stopDate.getDay() !== 5) nextMonthDays = fillDaysFromNextMonth(stopDate)

  const result = {
    previousMonth: previousMonthDays,
    currentMonth: currentMonthDays,
    nextMonth: nextMonthDays
  }
  return result
}

/*   function highlightCurrentDay (date) {
    const todaysDate = new Date().getDate()
    const todaysMonth = new Date().getMonth()
    const todaysYear = new Date().getFullYear()

    const sameDay = date.getDate() === todaysDate
    const sameMonth = date.getMonth() === todaysMonth
    const sameYear = date.getFullYear() === todaysYear

    const sameDate = sameDay && sameMonth && sameYear
    if (sameDate) {

    }
  } */

const december2022 = getDates(2022, 11)
// console.log(december2022)

domDisplay('Dates of december 2022, from Sunday to Saturday')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
Object.values(december2022).forEach(array => {
  array.forEach(date =>

    domDisplay(`${days[date.getDay()]} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`, 'test'))
})
