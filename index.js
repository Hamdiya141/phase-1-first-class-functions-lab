const driver = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(drivers) {
    return driver.slice(0,2)
}

const  returnLastTwoDrivers = function(drivers) {
    return driver.slice(-2)

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    
function createFareMultiplier(param) {
    return function(fare){
        return fare * param
    }
}

const fare = createFareMultiplier

function fareDoubler(fare) {
    return fare *2
}
    
function fareTripler(fare) {
    return fare *3
}
 
function selectDifferentDrivers(array, func) {
    return func(array)
}



