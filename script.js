
function snapCrackle(maxValue) {

    let str = []

    for (let numbers = 1; numbers <= maxValue; numbers++) {

      if (numbers %5 == 0 && numbers %2 != 0){
        str.push('SnapCrackle')

      } else if (numbers %5 == 0){
        str.push('Crackle')

      } else if (numbers %2 !== 0){
        str.push('Snap')

      } else {
        str.push(numbers)
      }
    }
    return str.join(`,`)
  }
  console.log(snapCrackle(12))


