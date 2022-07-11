const shortid = require('shortid');
class Ticket {
  constructor(userName, price) {
    this.userId = shortid.generate();
    this.userName = userName;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
module.exports = Ticket;
