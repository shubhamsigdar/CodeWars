// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//P:string of digits
//R: you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//E:
//P: 

function fakeBin(x){
    //convert string to number
    let y=parseInt(x);
    //convert number to array
    const array = Array.from(String(y), Number);
    let newArray=array.map(items=>{
      if(items<5){
        return 0;
      }
      else{
        return 1;
      }
    });
  let returnString=newArray.join('')
    return returnString;
    
  }
  console.log(fakeBin('45385593107843568'), '01011110001100111')
  console.log(fakeBin('509321967506747'), '101000111101101')
  console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011')
  