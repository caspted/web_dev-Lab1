import * as fs from 'node:fs';
import * as readLineSync from 'readline-sync';

const FILENAME = 'debts_1.txt';

function isNumber(value: number) {
  return !Number.isNaN(value);
}

function callAfterWritingFile(error: NodeJS.ErrnoException | null) {
  if (error) {
    console.log('Something went wrong writing the files:', error.message);
  }
}

while (true) {
  const input = readLineSync.question('Who owes you money and how much?');

  console.log('The input is:', input);

  if (input == 'No debt') {
    break;
  }

  if (!input.includes(' ')) {
    console.log('Invalid input format');
    continue;
  }

  const [debtorsName, amountAsString] = input.split(' ');
  const amount = Number(amountAsString);

  if (isNumber(amount)) {
    fs.writeFile(FILENAME, input + '\n', { flag: 'a+' }, callAfterWritingFile);
  } else {
    console.log('Amount is not a number');
  }
}

function displayDebtors() {
  console.log('-'.repeat(100));
  console.log('Here are our debtors!');
  fs.readFile(FILENAME, (error, debt) => {
    if (error) {
      console.log(error);
    }
    console.log(debt.toString());
  });
}

displayDebtors();
