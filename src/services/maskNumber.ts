function normalizeNumber(value: any) {
  const onlyNumbers = value.replace(/[^\d]/g, "");
  const digitsCount = onlyNumbers.length;
  let formattedNumber = "";

  if (digitsCount <= 2) {
    formattedNumber = onlyNumbers;
  } else if (digitsCount <= 6) {
    formattedNumber = `(${onlyNumbers.substr(0, 2)}) ${onlyNumbers.substr(2)}`;
  } else if (digitsCount <= 10) {
    formattedNumber = `(${onlyNumbers.substr(0, 2)}) ${onlyNumbers.substr(
      2,
      4
    )}-${onlyNumbers.substr(6)}`;
  } else if (digitsCount <= 11) {
    formattedNumber = `(${onlyNumbers.substr(0, 2)}) ${onlyNumbers.substr(
      2,
      1
    )} ${onlyNumbers.substr(3, 4)}-${onlyNumbers.substr(7)}`;
  } else {
    formattedNumber = onlyNumbers.substr(0, 11);
  }

  return formattedNumber;
}

export default normalizeNumber;
