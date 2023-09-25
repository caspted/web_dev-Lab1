import * as fs from 'node:fs/promises';
import * as readLineSync from 'readline-sync';

const FILENAME = 'debts_3.txt';

function isNumber(value: number) {
  return !Number.isNaN(value);
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
    fs.writeFile(FILENAME, input + '\n', { flag: 'a+' })
      .then(() => {
        console.log(`Debtors has been recorded successfully: ${input}`);
      })
      .catch((error) => {
        console.log('Something went wrong while writing the file', error);
      });
  }
}

async function displayDebtors() {
  console.log('-'.repeat(100));
  console.log('Here are the names of the debtors');
  const debt = await fs.readFile(FILENAME, 'utf-8');
  console.log(debt.toString());
}

displayDebtors();
