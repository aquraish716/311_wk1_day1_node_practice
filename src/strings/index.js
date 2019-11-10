const split = (str, delim) => {
  // write code for strings.split
return str.split(delim);
}

const pairs = (str) => {
  // write code for strings.pairs
  let array = [];
  for(i = 0; i < str.length; i = i +2){
    array.push(str[i] + str[i + 1]);
  
  }
return array;
}

//pairs('abcdefghijklmnop');

const reverse = (str) => {
  // write code for strings.reverse
return str.split("").reverse().join("");

}
//reverse('a blue dog');
module.exports = {
  split,
  pairs,
  reverse
}

