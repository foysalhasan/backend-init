const db = require('../db/db');
const router = require('express').Router();

router.delete('/t/:userId', (req, res) => {
  const { userId } = req.params;
  db.delete(userId);
  res.status(200).send('Deleted !');
});

router.get('/u/:userName', (req, res) => {
  const { userName } = req.params;
  const result = db.filter(userName);
  res.status(200).json({ message: 'wow', result });
});

router.get('/t/:userId', (req, res) => {
  const { userId } = req.params;
  const result = db.findById(userId);
  res.status(200).json(result);
});

router.patch('/t/:userId', (req, res) => {
  const { userId } = req.params;
  const ticketBody = req.body;
  const result = db.update(userId, ticketBody);
  res.status(200).json(result);
});

router.post('/sell', (req, res) => {
  const { userName, price } = req.body;
  const ticket = db.createTicket(userName, price);
  res.status(201).json({ message: 'Successfully Created', ticket });
});

router.post('/bulk-sell', (req, res) => {
  const { userName, price, quantity } = req.body;
  const tickets = db.bulkCreate(userName, price, quantity);
  res.status(201).json({ message: 'Successfully Bulk Created', tickets });
});

router.get('/draw', (req, res) => {
  const wc = req.query.wc ?? 2;
  const winners = db.drawWinner(wc);
  res.status(200).json(winners);
});

router.get('/', (_req, res) => {
  const tickets = db.find();
  res.status(200).json(tickets);
});

module.exports = router;
