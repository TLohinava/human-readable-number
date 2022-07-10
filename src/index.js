module.exports = function toReadable (number) {
  let string = String(number);
  let stringFirst = string[0];
  let stringSecond = string[1];
  let stringThird = string[2];
  let slicedString = +string.slice(1);
  let dg = ['zero','one','two','three','four','five','six','seven','eight','nine', 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen']; 
  let tw = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  if (number < 20) {
    return dg[number];
  } else if (string.length === 2) {
    if (string[1] === '0') {
      return `${tw[stringFirst]}`;
    } else {
      return `${tw[stringFirst]} ${dg[stringSecond]}`;
    }
  } else if (string.length === 3) {
    if (string[1] === '0') {
      if (string[1] === '0' && string[2] === '0') {
      return `${dg[stringFirst]} hundred`
      } else {
        return `${dg[stringFirst]} hundred ${dg[stringThird]}`
      }
    } else if (string[1] === '1') {
        return `${dg[stringFirst]} hundred ${dg[slicedString]}`
    } else if (string[2] === '0') {
        return `${dg[stringFirst]} hundred ${tw[stringSecond]}`
    } else {
        return `${dg[stringFirst]} hundred ${tw[stringSecond]} ${dg[stringThird]}`
    }
  }
}
