function isATheLargest(a, b, c) {
  if (a > b && a > c) {
    return true;
  } else {
    return false;
  }
}

function isBTheLargest(a, b, c) {
  if (b > a && b > c) {
    return true;
  } else {
    return false;
  }
}

function isCTheLargest(a, b, c) {
  if (c > a && c > b) {
    return true;
  } else {
    return false;
  }
}
function isAandBEqualBig(a, b, c) {
  if (a == b && a > c) {
    return true;
  } else {
    return false;
}
}
function isAandCEqualBig(a, b, c) {
  if (a == c && a > b) {
    return true;
  } else {
    return false;
}
}
function isBandCEqualBig(a, b, c) {
  if (b == c && b > a) {
    return true;
  } else {
    return false;
}
}

export function TheLargestNumber(a1, b1, c1) {
  let a = parseFloat(a1);
  let b = parseFloat(b1);
  let c = parseFloat(c1);

  if (isATheLargest(a, b, c)) {
    return "The 1st number is largest and equal: " + a;
  } else if (isBTheLargest(a, b, c)) {
    return "The 2nd number is largest and equal: " + b;
  } else if (isCTheLargest(a, b, c)) {
    return "The 3rd number is largest and equal: " + c;
  }  else if (isAandBEqualBig(a, b, c)) {
    return "The 1st and 2nd numbers are largest and equal: " + a;
  } else if (isAandCEqualBig(a, b, c)) {
    return "The 1st and 3rd numbers are largest and equal: " + a;
  }
  else if (isBandCEqualBig(a, b, c)) {
    return "The 2nd and 3rd numbers are largest and equal: " + b;
  }
   else {
    return "All three numbers are equal. And equal: " + a;
  }
}
