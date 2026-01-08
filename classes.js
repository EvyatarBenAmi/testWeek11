import { v4 as uuidv4 } from 'uuid';

class Flight {
    constructor(flightName, airline, flightNumber, maximumPassengers, regularTicketPrice, vipTicketPrice) {
        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber
        this.maximumPassengers = maximumPassengers
        this.regularTicketPrice = regularTicketPrice
        this.vipTicketPrice = vipTicketPrice
        this.ticketsList = []
        this.createTickete()
    }
    createTickete() {
        const ninetyPercentTicket = 90 / 100 * this.maximumPassengers
        const tenPercentTicket = 10 / 100 * this.maximumPassengers

        for (let numTicket = 0; numTicket < ninetyPercentTicket; numTicket++) {
            this.ticketsList.push(new RegularTicket(this.regularTicketPrice))
        }
        for (let numTicket = 0; numTicket < tenPercentTicket; numTicket++) {
            this.ticketsList.push(new VIPticket(this.vipTicketPrice))
        }
    }
};

export class StudentPassenger {
    constructor(name, IDnumber, amountOfMoney, placeOfStudy) {
        this.name = name
        this.IDnumber = IDnumber
        this.amountOfMoney = amountOfMoney
        this.placeOfStudy = placeOfStudy
    }
};

export class RegularPassenger extends StudentPassenger {
    constructor(name, IDnumber, amountOfMoney, knowsAnAirportEmployee) {
        super(name, IDnumber, amountOfMoney)
        this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }
};

class RegularTicket {
    constructor(price, ownerName = "") {
        this.ticketNumber = uuidv4()
        this.price = price
        this.ownerName = ownerName
    }
};

class VIPticket extends RegularTicket {
    constructor(ticketNumber, price, ownerName) {
        super(ticketNumber, price, ownerName)
        this.benefitsList = [`Free alcohol`, `Free food`, `Hot towels`]
    }
};

export class Airport {
    constructor() {
        this.flights = []
        this.createThreeFlights()
    }
    createThreeFlights() {
        this.flights.push(new Flight(`ToTLV`,`El Al`,759,10,600,830))
        this.flights.push(new Flight(`ToRoma`,`El Al`,285,20,800,1300))
        this.flights.push(new Flight(`ToPrague`,`El Al`,679,5,860,980))
    }
};