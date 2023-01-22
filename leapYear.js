function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log("Yes");
    } 
    else {
        console.log("No");
    }
}
const year = prompt('Enter a year:');

checkLeapYear(year);