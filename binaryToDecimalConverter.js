const validation = (entry) => {
  let rtn = true;

  const checkIfZeroOne = (arr) => {
    arr.split('').forEach((i) => {
      if (i !== '0' && i !== '1') rtn = false;
    });
  };

  try {
    'use strict'; // check for no octal numbers
    const strng = entry.toString();
    strng.length !== 0 ? checkIfZeroOne(strng) : rtn = false;
  } catch (e) { rtn = false; }

  return rtn || 'Positive binary numbers input only!';
};


const binaryToDecimal = (binary) => {
  const transaction = () => {
    const arr = binary.toString().split('').reverse();
    const resArr = [];

    arr.forEach((numb, index) => {
      resArr.push(numb * (2 ** index));
    });

    return resArr.reduce((numbI, numbII) => numbI + numbII);
  };

  return validation(binary) === true ? transaction() : validation(binary);
};


const binaryToDecimalRecursion = (binary) => {
  const transaction = () => {
    const arr = binary.toString().split('').reverse();

    const resArr = [];

    const recur = (ar) => {
      ar ? recur(ar - 1) : ar;
      resArr.push(arr[ar] * (2 ** ar));
    };

    recur(arr.length - 1);

    return resArr.reduce((numbI, numbII) => numbI + numbII);
  };

  return validation(binary) === true ? transaction() : validation(binary);
};

console.log(binaryToDecimal(1101));
console.log(binaryToDecimalRecursion(111000001));
