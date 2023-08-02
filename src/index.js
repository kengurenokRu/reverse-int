module.exports = function reverse (n) {
    if (n<0) n = n*-1;
  let nStr = n.toString();
  let k = nStr.length; 
  let number = 0;
  let pow = 1;
  for (let i = 0; i<k; i++)
  {
  number = number + parseInt(nStr[i])*pow;
  pow = pow * 10;
  }
  return number;
}
