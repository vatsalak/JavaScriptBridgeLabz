//RegExp can return matching packets
const regExpDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match      = regExpDate.exec('2020-06-25');
const year       = match[1]; // 2020
const month      = match[2]; // 06
const day        = match[3]; // 25