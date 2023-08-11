import { DateTime } from "luxon";
import axios from "axios";

export const isMobile = () => {
  if (window.screen.width < 767) {
    return true;
  }
  return false;
};

export const shuffle = (array) => {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

// takes a number and returns a string representation of that number with 
// commas and two decimal places.
export const numberWithCommas = (x, showCent = true) => {
  if (showCent) {
    return Number(x).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else {
    return Number(x).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

}

export const isValidDateString = (dateString) => {
  if (dateString === null || dateString === undefined) return false

  let timestamp = Date.parse(dateString);
  if (isNaN(timestamp)) {
    return false
  } else {
    return true
  }
}
