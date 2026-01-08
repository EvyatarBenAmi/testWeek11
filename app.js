import { Airport,RegularPassenger, StudentPassenger } from "./classes.js";

function app() {
    const airport = new Airport()
    const student = new StudentPassenger(`Evyatar`,209165257,1000,`IDF`)
    const regular = new RegularPassenger(`Stav`,51489652,1500,true)
    const result = airport.flights[0].ticketsList.find((ticket)=> !ticket.ownerName && ticket.price >= regular.amountOfMoney)
    if(!result)return `Error: No purchase option`
    result[0].ticket.ownerName = regular.name
    regular.amountOfMoney -= [result].ticket.price
    return regular
}
app()