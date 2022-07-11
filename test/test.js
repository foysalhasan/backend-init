const db = require('../db/db');
db.createTicket('sagor', 100);
db.createTicket('sagor', 100);
db.createTicket('reza', 100);
db.createTicket('aksh', 100);
db.createTicket('munim', 100);
db.createTicket('pranto', 100);
db.createTicket('sumaia', 100);
db.bulkCreate('foysal', 10, 5);
db.bulkCreate('badsha', 10, 5);

const res = db.find();
console.log(res);

console.log('✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅');

const winners = db.drawWinner(3);
console.log(winners);
