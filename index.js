let a = 4;
let b = 2;
let c = a + b;
console.log(c);

let loadash = require('lodash');
let moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
// console.log(moment().format('dddd'));
// console.log(moment().format("MMM Do YY"));
// console.log(moment("20200101", "YYYYMMDD").fromNow());
// console.log(moment("20200114", "YYYYMMDD").fromNow());
// console.log(moment().add(7, 'days'));
// console.log(moment().add(7, 'month'));
// console.log(moment().add(7, 'years'));
// console.log(moment().subtract(7, 'days'));
// console.log(moment().subtract(7, 'month'));
// console.log(moment().subtract(7, 'years'));

// const dateB = moment('2014-11-11');
// const dateC = moment('2015-9-11');

// console.log('Difference is ', dateB.diff(dateC, 'days'), 'days');
// console.log(moment('2020-01-01').isAfter('2018-01-01'));
// console.log(moment('2010-01-01').isAfter('2019-01-01'));

// console.log(moment([2020]).isLeapYear());
// console.log(moment([2019]).isLeapYear());

console.log(loadash.chunk(['a', 'b', 'c', 'd'], 2));

console.log(loadash.compact([0, 1, false, 2, '', 3]));

var array = [1];
var other = loadash.concat(array, 2, [3], [[4]]);

console.log(other);

console.log(loadash.difference([2, 1], [2, 3]));

console.log(loadash.dropRight([1, 2, 3]));
