var NumberToBreak = "";
var ERROR = 'ERROR';
module.exports = {
  guess:function(number){
    let resultX = '', result_ = '';
    if(number === undefined)
      return ERROR;
    number = number.toString();
    if( isNaN(number) || number.indexOf('e') !== -1 || number.length !== 4)
      return ERROR;
    let auxNumber = number;
    number = number.split('');
    auxNumber = auxNumber.toString().split('');
    auxNumber = auxNumber.sort();
    for (let i = 0; i< number.length; i++) {
      //Validar numeros repetidos
      if(i<number.length-1 && auxNumber[i]===auxNumber[i+1])
        return ERROR;
      if(NumberToBreak.indexOf(number[i]) !== -1) {
        if (NumberToBreak[i] === number[i]) {
          resultX += 'X';
        }else{
          result_ += '_';
        }
      }
    }
    return resultX+result_;
  },
  setNumber:function(number) {
    NumberToBreak = number;
  }
}
