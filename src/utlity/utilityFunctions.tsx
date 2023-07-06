function showTwoDecimals(number:number) {
  if(number==null) return 0;
  return Number(number.toFixed(2));
}
function shortenNumber(number: any): string {
  const suffixes: string[] = ['', 'K', 'M', 'B', 'T', 'Q', 'QQ', 'S', 'SS', 'O', 'N', 'D', 'U', 'DD', 'TD', 'QD', 'Qn', 'SD', 'ST', 'O', 'N', 'V', 'U', 'DT'];
  let suffixIndex: number = 0;

  while (number >= 1000 && suffixIndex < suffixes.length - 1) {
    number /= 1000;
    suffixIndex += 1;
  }

  const formattedNumber: string = number.toFixed(2).replace(/\.0+$/, '');
  const shortenedNumber: string = formattedNumber + suffixes[suffixIndex];

  return shortenedNumber;
}


export  {showTwoDecimals, shortenNumber}; 