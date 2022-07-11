const Ticket = require('../models/Ticket');

class myDB {
  constructor() {
    this.tickets = [];
  }
  //✅SELL TICKET
  createTicket(userName, price) {
    const ticket = new Ticket(userName, price);
    this.tickets.push(ticket);
    return ticket;
  }

  //✅BUL CREATE TICKETS
  bulkCreate(userName, price, quantity) {
    let result = [];
    for (let i = 0; i < quantity; i++) {
      const res = this.createTicket(userName, price);
      result.push(res);
    }
    return result;
  }

  //✅FIND ALL TICKETS

  find() {
    return this.tickets;
  }

  //✅FIND BY ID OF TICKETS
  findById(userId) {
    const result = this.tickets.find((ticket) => ticket.userId === userId);
    return result;
  }

  //✅FILTER TICKET OF A USER
  filter(userName) {
    const tickets = this.tickets.filter((tickets) => tickets.userName === userName);
    return tickets;
  }

  //✅UPDATE TICKET OF A USER
  update(userId, ticketBody) {
    const findTicket = this.findById(userId);
    findTicket.userName = ticketBody.userName ?? findTicket.userName;
    findTicket.price = ticketBody.price ?? findTicket.price;
    findTicket.updatedAt = new Date();
    return findTicket;
  }

  //✅DELETE TICKET OF A USER
  delete(userId) {
    const index = this.tickets.indexOf((ticket) => ticket.userId === userId);
    this.tickets.splice(index, 1);
  }

  //   ✅✅✅SET WINNER
  drawWinner(winnerCount) {
    const winners = [];
    for (let i = 0; i < winnerCount; i++) {
      let index = Math.floor(Math.random() * this.tickets.length);
      while (winners.includes(index)) {
        index = Math.floor(Math.random() * this.tickets.length);
      }
      winners.push(index);
    }
    const result = winners.map((index) => this.tickets[index]);
    return result;
  }
}

const db = new myDB();
module.exports = db;
