/* function sum(num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
} */

/* function sum1(num) {
  if (num <= 0) return num;
  else return sum1 + sum1 - 1;
}

 */

/* function maskify(n) {
  let tab = n.toString();
  return tab.length <= 4
    ? tab
    : tab.slice(0, tab.length - 4).replace(/./g, "#") +
        tab.slice(tab.length - 4);
}
 */

/* function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
 */

/* function filter_list(l) {
  return l.filter(num => {
    return typeof num === "number";
  });
}
 */
/* 
function friend(friends) {
  let tab = new Array();
  for (const el of friends) {
    if (el.length <= 4 && el !== typeof number) tab.push(el);
  }
  return tab;
}
 */
/* function makeNegative(num) {
  return num < 0 ? num : num *-1
} */

/* function getMiddle(s) {
  return s.length % 2 ? s.charAt(s.length / 2) : s.substr(s.length / 2 - 1, 2);
}
 */

/* function accum(s) {
  let tab = "";
  for (el in s) {
    tab += s[el].toUpperCase() + s[el].toLowerCase().repeat(el) + "-";
  }
  return tab.substr(0, tab.lastIndexOf("-"));
} */
/* function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
 */

/* function highAndLow(numbers) {
  let el = numbers.split(" ").map(c => parseInt(c, 10));
  return Math.max.apply(Math, el) + " " + Math.min.apply(Math, el);
}
 */

/* function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}
 */
/* function findUniq(arr) {
  arr.sort();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[arr.length - 1];
    } else return arr[0];
  }
} */

/* function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
} */

/* function likes(names) {
  if (names.length === 0) return "no one likes this";
  else {
    for (i = 0; i < names.length; i++) {
      if (names.length == 1) return names[0] + " likes this";
      if (names.length < 3) return names[0] + " and " + names[1] + "like this";
      if (names.length == 3)
        return names[0] + " " + names[1] + " and " + names[2] + " like this";
      if (names.length > 3)
        return (
          names[0] +
          ", " +
          names[0] +
          " and " +
          (names.length - 2) +
          " others like this"
        );
    }
  }
} */
/* function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
} */
/* function longestConsec(strarr, k) {
  if (strarr.length == 0 || strarr.length < k || k <= 0) {
    return "";
  } else
    return strarr
      .sort((a, b) => b.length - a.length)
      .slice(0, k)
      .join()
      .replace(",", "");
}
 */

/* function longestConsec(strarr, k) {
  let max = "";
  if (strarr.length == 0 || strarr.length < k || k <= 0) {
    return "";
  } else {
    for (let i = 0; i < strarr.length; i++) {
      if (
        strarr
          .slice(i, i + k)
          .join()
          .replace(",", "").length > max.length
      )
        max = strarr
          .slice(i, i + k)
          .join()
          .replace(/\,/g, "");
    }
    return max;
  }
}
 */
/* function solution(str, ending) {
  return str.slice(-ending.length) == ending || ending == "" ? true : false;
} */
/* function solution(str, ending){
  return str.endsWith(ending);
} */
/* function solution(str, ending) {
  return str.substr(-ending.length) == ending;
}
 */
/* function getCount(str) {
  let vowelsCount = 0;
  for (const el of str) {
    if (el == "a" || el == "e" || el == "i" || el == "o" || el == "u")
      vowelsCount++;
  }

  return vowelsCount;
}
 */

/* function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}
 */

/* function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
 */

/* function findShort(s) {
  return s
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;
}
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map(w => w.length)
  );
}
function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}
 */
/* function sumDigits(number) {
  let sum = 0;
  let n = number.toString().split("");
  if (n[0] == "-") n.shift();

  for (const el of n) {
    sum += Number(el);
  }
  return sum;
} */
/* function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function(a, b) {
      return +a + +b;
    }, 0);
}
 */

/* function findOdd(A) {
  return A.reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    console.log("dupa", a[e] + 1);
    return a;
  }, {});
}
 */

// function alphabetPosition(text) {
//   let alp = "abcdefghijklmnopqrstuvwxyz";
//   text.toLowerCase().replace(/\s/g, "");
//   for (const el of text) {
//     console.log(el);
//   }
// }

function descendingOrder(n) {
  return parseInt(
    String(n)
      .split("")
      .sort()
      .reverse()
      .join("")
  );
}
