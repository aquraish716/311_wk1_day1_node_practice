const isEven = (num) => {
  // write code for numbers.isEven
  let n = 10;
  if(n%2 == 0){
    return true
  }

}

const sum = (arr) => {
  // write code for numbers.sum
  return arr.reduce((total, amount) => total + amount); 
}

const comboSum = (arr, number) => {
  // write code for numbers.comboSum
  let thisSum = sum(arr);
  if(thisSum == number){
    return true;
  }else {
    return false;
  }
}

module.exports = {
  isEven,
  sum,
  comboSum
}