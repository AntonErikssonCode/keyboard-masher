function showTwoDecimals(number:number) {
  if(number==null) return 0;
  return Number(number.toFixed(2));
}

function shortenNumber(number: any, useLongSuffixes: boolean): string {
  const suffixesShort: string[] = ['', 'K', 'M', 'B', 'T', 'Q', 'QQ', 'S', 'SS', 'O', 'N', 'D'];
  const suffixesLong: string[] = ['', ' Thousand', ' Million', ' Billion', ' Trillion', ' Quadrillion', ' Quintillion', ' Sextillion', ' Septillion', ' Octillion', ' Nonillion', ' Decillion'];

  const suffixes: string[] = useLongSuffixes ? suffixesLong : suffixesShort;
  let suffixIndex: number = 0;

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex += 1;
  }

  const formattedNumber: string = number.toFixed(1).replace(/\.0+$/, '');
  const shortenedNumber: string = formattedNumber + suffixes[suffixIndex];

  return shortenedNumber;
}


function getRandomInt(min: number, max: number): number {
  // Add 1 to the difference between max and min
  // Multiply it by Math.random()
  // Floor the result to get an integer within the range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomIntNotFloor(min: number, max: number): number {
  // Add 1 to the difference between max and min
  // Multiply it by Math.random()
  // Floor the result to get an integer within the range
  return Math.random() * (max - min) + min;
}

export  {showTwoDecimals, shortenNumber, getRandomInt, getRandomIntNotFloor}; 