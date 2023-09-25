import * as fs from 'node:fs/promises';
import * as readLineSync from 'readline-sync';

const FILENAME = 'debts_2.txt';

while (true) {
  const input = readLineSync.question('Who owes you and how much?');
  console.log('The input is: ', input);

  if (input == 'No debt') {
    break;
  }

  if (!input.includes(' ')) {
    console.log('This is the wrong format');
    continue;
  }

  const [debtorsName, amountAsString] = input.split(' ');
  const amount = Number(amountAsString);

  if (!isNaN(amount)) {
    fs.writeFile(FILENAME, input + '\n', { flag: 'a+' });
  } else {
    console.log('The amount is not a number');
  }
}

async function displayMyDebtors() {
  console.log('-'.repeat(100));
  console.log('These guys need to pay up!');
  try {
    const debt = await fs.readFile(FILENAME, 'utf8');
    console.log(debt.toString());
  } catch {
    console.log('This might take a little bit of time');
  }
}

displayMyDebtors();
