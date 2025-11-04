const path = require('path');
const ScoreCounter = require('score-tests');
const { Rectangle, Vehicle, PasswordManager, TodoList, BankAccount } = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  describe('Rectangle', () => {
    it('constructor accepts length and width parameters', () => {
      const myShape = new Rectangle(10, 5);
      expect(myShape.length).toBe(10);
      expect(myShape.width).toBe(5);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getArea returns the area of the rectangle', () => {
      const myShape = new Rectangle(10, 5);
      expect(myShape.getArea()).toBe(50);

      const myShape2 = new Rectangle(3, 3);
      expect(myShape2.getArea()).toBe(9);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getPerimeter returns the perimeter of the rectangle', () => {
      const myShape = new Rectangle(10, 5);
      expect(myShape.getPerimeter()).toBe(30); // 10 * 2 + 5 * 2

      const myShape2 = new Rectangle(3, 3);
      expect(myShape2.getPerimeter()).toBe(12); // 3 * 2 + 3 * 2

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('isSquare returns false when length and width are different', () => {
      const myShape = new Rectangle(10, 5);
      expect(myShape.isSquare()).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('isSquare returns true when length and width are equal', () => {
      const myShape = new Rectangle(3, 3);
      expect(myShape.isSquare()).toBe(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('length and width are public properties that can be mutated', () => {
      const myShape = new Rectangle(10, 5);
      expect(myShape.isSquare()).toBe(false);

      myShape.width = 3;
      myShape.length = 3;
      expect(myShape.getArea()).toBe(9);
      expect(myShape.getPerimeter()).toBe(12);
      expect(myShape.isSquare()).toBe(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('Vehicle', () => {
    it('constructor accepts type and capacity parameters', () => {
      const motorcycle = new Vehicle('Motorcycle', 2);
      expect(motorcycle.type).toBe('Motorcycle');
      expect(motorcycle.capacity).toBe(2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('color defaults to "black" when not provided', () => {
      const motorcycle = new Vehicle('Motorcycle', 2);
      expect(motorcycle.color).toBe('black');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('color is set when provided as third parameter', () => {
      const bus = new Vehicle('School Bus', 48, 'yellow');
      expect(bus.color).toBe('yellow');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('passengers is initialized as an empty array', () => {
      const motorcycle = new Vehicle('Motorcycle', 2);
      expect(motorcycle.passengers).toEqual([]);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('addPassenger adds a passenger and returns the number of passengers', () => {
      const motorcycle = new Vehicle('Motorcycle', 2);
      expect(motorcycle.addPassenger('Bonnie')).toBe(1);
      expect(motorcycle.passengers).toEqual(['Bonnie']);

      expect(motorcycle.addPassenger('Clyde')).toBe(2);
      expect(motorcycle.passengers).toEqual(['Bonnie', 'Clyde']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('addPassenger returns -1 when capacity is full', () => {
      const motorcycle = new Vehicle('Motorcycle', 2);
      motorcycle.addPassenger('Bonnie');
      motorcycle.addPassenger('Clyde');

      expect(motorcycle.addPassenger('Toto')).toBe(-1);
      expect(motorcycle.passengers).toEqual(['Bonnie', 'Clyde']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('paint updates the vehicle color and returns the new color', () => {
      const motorcycle = new Vehicle('Motorcycle', 2);
      expect(motorcycle.color).toBe('black');

      const newColor = motorcycle.paint('red');
      expect(newColor).toBe('red');
      expect(motorcycle.color).toBe('red');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('PasswordManager', () => {
    it('constructor accepts a password parameter', () => {
      const myPW = new PasswordManager('abc');
      expect(myPW).toBeDefined();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('password is private and cannot be accessed directly', () => {
      const myPW = new PasswordManager('abc');
      expect(myPW.password).toBeUndefined();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('checkPassword returns true when attempt matches the password', () => {
      const myPW = new PasswordManager('abc');
      expect(myPW.checkPassword('abc')).toBe(true);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('checkPassword returns false when attempt does not match the password', () => {
      const myPW = new PasswordManager('abc');
      expect(myPW.checkPassword('blah')).toBe(false);
      expect(myPW.checkPassword('xyz')).toBe(false);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('setPassword returns false when oldPassword does not match', () => {
      const myPW = new PasswordManager('abc');
      expect(myPW.setPassword('blah', 'foobar')).toBe(false);
      expect(myPW.checkPassword('abc')).toBe(true); // password unchanged

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('setPassword updates password and returns true when oldPassword matches', () => {
      const myPW = new PasswordManager('abc');
      expect(myPW.setPassword('abc', 'foobar')).toBe(true);
      expect(myPW.checkPassword('foobar')).toBe(true);
      expect(myPW.checkPassword('abc')).toBe(false); // old password no longer works

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('TodoList', () => {
    it('constructor accepts a title parameter', () => {
      const groceryList = new TodoList('groceries');
      expect(groceryList.title).toBe('groceries');

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('items array is private and cannot be accessed directly', () => {
      const groceryList = new TodoList('groceries');
      expect(groceryList.items).toBeUndefined();

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getItems returns an empty array initially', () => {
      const groceryList = new TodoList('groceries');
      expect(groceryList.getItems()).toEqual([]);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('addItem adds a new item and returns the new length', () => {
      const groceryList = new TodoList('groceries');
      expect(groceryList.addItem('bread')).toBe(1);
      expect(groceryList.addItem('milk')).toBe(2);
      expect(groceryList.addItem('eggs')).toBe(3);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getItems returns the items after adding', () => {
      const groceryList = new TodoList('groceries');
      groceryList.addItem('bread');
      groceryList.addItem('milk');
      groceryList.addItem('eggs');
      expect(groceryList.getItems()).toEqual(['bread', 'milk', 'eggs']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('removeItem removes an item and returns the removed item', () => {
      const groceryList = new TodoList('groceries');
      groceryList.addItem('bread');
      groceryList.addItem('milk');
      groceryList.addItem('eggs');

      expect(groceryList.removeItem('milk')).toBe('milk');
      expect(groceryList.getItems()).toEqual(['bread', 'eggs']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('removeItem returns null when item is not found', () => {
      const groceryList = new TodoList('groceries');
      groceryList.addItem('bread');
      groceryList.addItem('milk');
      groceryList.addItem('eggs');

      expect(groceryList.removeItem('cheese')).toBe(null);
      expect(groceryList.getItems()).toEqual(['bread', 'milk', 'eggs']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getItems returns a copy of the array, not the original', () => {
      const groceryList = new TodoList('groceries');
      groceryList.addItem('bread');
      groceryList.addItem('eggs');

      const items = groceryList.getItems();
      items.length = 0;

      // The internal array should not be affected
      expect(groceryList.getItems()).toEqual(['bread', 'eggs']);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  describe('BankAccount', () => {
    it('constructor only adds PUBLIC instance properties to each instance, not private properties or static methods', () => {
      const firstName1 = 'John';
      const lastName1 = 'Doe';
      const balance1 = 100;
      const bankAccount1 = new BankAccount(firstName1, lastName1, balance1);
      expect(bankAccount1).toEqual({ firstName: firstName1, lastName: lastName1 });

      const firstName2 = 'Jane';
      const lastName2 = 'Doe';
      const balance2 = 200;
      const bankAccount2 = new BankAccount(firstName2, lastName2, balance2);
      expect(bankAccount2).toEqual({ firstName: firstName2, lastName: lastName2 });

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('showBalance returns a message of the balance to two decimal places', () => {
      const balance1 = 100;
      const bankAccount1 = new BankAccount('Bob', 'Robertson', balance1);
      expect(bankAccount1.showBalance()).toEqual(`Your balance is $100.00`);

      const balance2 = 12.34;
      const bankAccount2 = new BankAccount('Sarah', 'Haras', balance2);
      expect(bankAccount2.showBalance()).toEqual(`Your balance is $12.34`);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('defaults to a balance of 0 if a balance is not provided', () => {
      const bankAccount = new BankAccount('John', 'Doe');
      const balanceMsg = `Your balance is $0.00`;
      expect(bankAccount.showBalance()).toEqual(balanceMsg);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('deposit adds the amount to the balance and returns a message of the balance', () => {
      const balance1 = 100;
      const amount1 = 50;
      const msg1 = `Your balance is $150.00`;
      const bankAccount1 = new BankAccount('Bob', 'Robertson', balance1);
      expect(bankAccount1.deposit(amount1)).toEqual(msg1);

      const amount2 = 12.34;
      const msg2 = `Your balance is $162.34`;
      expect(bankAccount1.deposit(amount2)).toEqual(msg2);

      const balance2 = 200;
      const amount3 = 100;
      const bankAccount2 = new BankAccount('Sarah', 'Haras', balance2);
      const msg3 = `Your balance is $300.00`;
      expect(bankAccount2.deposit(amount3)).toEqual(msg3);

      const amount4 = 12.34;
      const msg4 = `Your balance is $312.34`;
      expect(bankAccount2.deposit(amount4)).toEqual(msg4);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('withdraw subtracts the amount from the balance and returns a message of the balance', () => {
      const balance1 = 100;
      const amount1 = 50;
      const msg1 = `Your balance is $50.00.`;
      const bankAccount1 = new BankAccount('Bill', 'Bryers', balance1);
      expect(bankAccount1.withdraw(amount1)).toEqual(msg1);
      const amount2 = 11.25;

      const msg2 = `Your balance is $38.75.`;
      expect(bankAccount1.withdraw(amount2)).toEqual(msg2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('withdraw does not withdraw if the amount is greater than the balance', () => {
      const bankAccount = new BankAccount('Simon', 'Sky', 100);

      const amountToWithdraw = 200;

      const msg = `You do not have enough funds.`;
      expect(bankAccount.withdraw(amountToWithdraw)).toBe(msg);

      const msg2 = `Your balance is $100.00`;
      expect(bankAccount.showBalance()).toBe(msg2);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });

    it('getTotalHoldings returns the total holdings across all BankAccount instances', () => {
      expect(typeof BankAccount.getTotalHoldings).toBe('function');
      expect(typeof BankAccount.getTotalHoldings()).toBe('number');
      expect(BankAccount.getTotalHoldings()).not.toBe(NaN);

      // The current holdings will be !== 0 because of the prior tests utilizing
      // The deposit and withdraw instance methods. So we'll get the starting
      // holdings as a baseline, rounding to 2 decimals to handle floating point
      // precision errors
      const totalHoldingsBaseline = Number(BankAccount.getTotalHoldings().toFixed(2));

      // We'll create an account with an initial balance of 5. The resulting
      // total holdings should be 5 more than the baseline
      const account1 = new BankAccount('John', 'a', 5);
      expect(BankAccount.getTotalHoldings()).toEqual(totalHoldingsBaseline + 5);

      // We'll create a second account with no additional balance
      const account2 = new BankAccount('Jane', 'b');
      expect(BankAccount.getTotalHoldings()).toEqual(totalHoldingsBaseline + 5);

      account2.deposit(10);
      expect(BankAccount.getTotalHoldings()).toEqual(totalHoldingsBaseline + 15);

      // This shouldn't change the holdings since account1 does not have
      // sufficient funds to withdraw 10
      account1.withdraw(10);
      expect(BankAccount.getTotalHoldings()).toEqual(totalHoldingsBaseline + 15);

      // But this should
      account1.withdraw(2);
      expect(BankAccount.getTotalHoldings()).toEqual(totalHoldingsBaseline + 13);

      scoreCounter.correct(expect); // DO NOT TOUCH
    });
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
