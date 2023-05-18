// Part 1: Checking if it's business hours
function businessHours(dayNumber, hourNumber) {
    if (dayNumber >= 1 && dayNumber <= 5 && hourNumber >= 9 && hourNumber < 18) {
      return true;
    } else {
      return false;
    }
  }
  
  // Part 2: Calculating the day of the week
  function getDayNumber(janFirstDayNumber, yearDayNumber) {
    let dayNumber = (janFirstDayNumber + yearDayNumber) % 7;
    return dayNumber;
  }
  
  // Part 3: Checking if it's business hours based on yearDayNumber and hourNumber
  function isBusinessHours(yearDayNumber, hourNumber) {
    let janFirstDayNumber = 1; // Assuming January 1st is a Monday
  
    let dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber);
  
    let isBusinessHour = businessHours(dayNumber, hourNumber);
    return isBusinessHour;
  }
  
  // Example usage:
  let yearDayNumber = 100; // Example year day number (0-365)
  let hourNumber = 14; // Example hour number (0-23)
  
  let isBusinessHour = isBusinessHours(yearDayNumber, hourNumber);
  
  console.log("Is it business hours? " + isBusinessHour);
  