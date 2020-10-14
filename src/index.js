module.exports = function toReadable (number) {
const numerals = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",  "thirteen", "fourteen"];
const partnumber = ["0", "1", "twen", "thir", "for", "fif", "six", "seven", "eigh", "nine"];
if(number == 0){return `${numerals[0]}`}
if(number == 1 || number == 100){
  if(number%100 == 0) {return `${numerals[1]} hundred`}
  return `${numerals[1]}`}
if(number == 2 || number == 200){
  if(number%100 == 0) {return `${numerals[2]} hundred`}
  return numerals[2]}
if(number == 3 || number == 300){
  if(number%100 == 0) {return `${numerals[3]} hundred`}
  return numerals[3]}
if(number == 4 || number == 400){
  if(number%100 == 0) {return `${numerals[4]} hundred`}
  return numerals[4]}
if(number == 5 || number == 500){
    if(number%100 == 0) {return `${numerals[5]} hundred`}
    return numerals[5]}
if(number == 6 || number == 600){
  if(number%100 == 0) {return `${numerals[6]} hundred`}
  return numerals[6]}
if(number == 7 || number == 700){
    if(number%100 == 0) {return `${numerals[7]} hundred`}
    return numerals[7]}
if(number == 8 || number == 800){
    if(number%100 == 0) {return `${numerals[8]} hundred`}
    return numerals[8]}
if(number == 9 || number == 900){
    if(number%100 == 0) {return `${numerals[9]} hundred`}
    return numerals[9]}
if(number == 10){return numerals[10]}
if(number == 11){return numerals[11]}
if(number == 12){return numerals[12]}
if(number == 13){return numerals[13]}
if(number == 14){return numerals[14]}
if(number > 12 && number < 20){
  let firstpart = number%10;
  return `${partnumber[firstpart]}teen`;}
if(number >= 20 && number < 100){
    let firstpart = number%10;
    let secontpart = Math.floor(number/10);
    if(number%10 == 0) {  return `${partnumber[secontpart]}ty`;}
    return `${partnumber[secontpart]}ty ${numerals[firstpart]}`;
  }
  if(number > 100 && number < 1000){
      let firstpart = number%10;
      let secontpart = Math.floor(number/10%10);
      let third = Math.floor(number/100);
      let range = Math.floor(number%100);
      if (range >= 10 && range <= 19) {
        if(range >14){  return `${numerals[third]} hundred ${partnumber[firstpart]}teen`;}
        return `${numerals[third]} hundred ${numerals[range]}`;
    }else {
      if(firstpart == 0){ return `${numerals[third]} hundred ${partnumber[secontpart]}ty`;}
      if(secontpart == 0){ return `${numerals[third]} hundred ${numerals[firstpart]}`;}
      return `${numerals[third]} hundred ${partnumber[secontpart]}ty ${numerals[firstpart]}` ;
    }
  }
}
