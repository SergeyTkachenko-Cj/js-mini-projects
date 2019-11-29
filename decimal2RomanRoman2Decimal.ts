
export function numeralCoverter(numer: number | string): number | string {

  const decimalToRoman = (arg: number): string => {

    const decim: Array<number> = [
      1000, 
      900, 
      500, 
      400, 
      100, 
      90, 
      50, 
      40, 
      10,
      9,
      5,
      4,
      1
    ];

    const roman: Array<string> = [
      'M', 
      'CM', 
      'D', 
      'CD', 
      'C', 
      'XC', 
      'L', 
      'XL', 
      'X',
      'IX',
      'V',
      'IV',
      'I'
    ];

    let result: string = '';

    for (let i = 0; i < decim.length; i++) {
      result += roman[i].repeat(arg / decim[i]);
      arg %= decim[i];
    }

    return result
  }

  const romanToDecimal = (arg: string): number => {

    const decode: any = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
    }

    return arg.toUpperCase()
              .split('')
              .reverse()  
              .map(i => decode[i])
              .reduce((acc, cur, indx, arr) => {
                return arr[indx - 1] > cur ? acc - cur : acc + cur
              });
  }

  // INPUT VALIDATION

  try {
    if (!isNaN(+numer / 0)) {
      return decimalToRoman(+numer)
    }
    else if (!isNaN(romanToDecimal(numer.toString()))) {
      return romanToDecimal(numer.toString())
    }
    else {
      throw new Error();
    }
  } catch(e) {
    return 'wrong input'
  }
}

// console.log(numeralCoverter('XXI')); // 21
// console.log(numeralCoverter('MCMXC')); // 1990
// console.log(numeralCoverter(2045)); // MMXLV
console.log(numeralCoverter(228)); // CCXXVIII