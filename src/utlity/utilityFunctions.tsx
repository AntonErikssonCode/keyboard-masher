function showTwoDecimals(number:number) {
  if(number==null) return 0;
  return Number(number.toFixed(2));
}

export default showTwoDecimals