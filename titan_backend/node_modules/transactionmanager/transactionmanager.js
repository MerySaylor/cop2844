"use strict";
class Transaction {
	constructor (date, description, category, amount) {
		this.date = date;
		this.description = description;
		this.category = category, 
		this.amount  = amount;
	}
}

const allTransactions= [ 
	new Transaction('Aug 07 2021', 'Baseball', 'sports', 20),
	new Transaction('Sep 07 2021', 'Baseball-mit', 'sports', 40),
	new Transaction('Oct 07 2021', 'Baseball-bat', 'sports', 30),
	new Transaction('Oct 07 2021', 'Whistle', 'sports', 10),
	new Transaction('Nov 07 2021', 'Baseball-tee', 'sports', 15),
];

exports.getAllTransactions = () => {
  return allTransactions;
}