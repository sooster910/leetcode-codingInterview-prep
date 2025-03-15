/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    // there are n flights  `
    const totalSeatsForFlights = Array(n).fill(0)
    for( const [first, last, seats] of bookings){
        for(let flight = first-1; flight<=last-1; flight++){
            totalSeatsForFlights[flight]+=seats
        }
    }
    
    return totalSeatsForFlights
};