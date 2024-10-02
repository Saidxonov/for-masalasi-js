//1.*1 dan 5 gacha bo‘lgan sonlarni ekranga chiqaring.*
// for (let num = 1; num <= 5; num++) {
//   console.log(num);
//   alert(num);
// }

// 2. **1 dan 20 gacha bo‘lgan barcha sonlarni ekranga chiqaring.**
// for (let num = 1; num <= 20; num++) {
//   console.log(num);
// }
//

//3. **Foydalanuvchi tomonidan kiritilgan sonning kvadratini 1 dan shu songacha bo‘lgan qiymatlar uchun ekranga chiqaring.**
// let check = +prompt("Sonni kiriting!");
// for (let num = 1; num <= check; num++) {
//   console.log(num);
// }

// 4. **0 dan 10 gacha bo‘lgan juft sonlarni ekranga chiqaring.**
// for (let num = 2; num <= 10; num += 2) {
//   console.log(num);
// }

// 5. **1 dan 15 gacha bo‘lgan barcha toq sonlarni ekranga chiqaring.**
// for (let num = 1; num <= 15; num += 2) {
//   console.log(num);
// }

// 6. **Foydalanuvchi tomonidan kiritilgan 5 ta sonni ekranga chiqaring.**
// let userNumber1 = +prompt("1-sonni kiriting!");
// let userNumber2 = +prompt("2-sonni kiriting!");
// let userNumber3 = +prompt("3-sonni kiriting!");
// let userNumber4 = +prompt("4-sonni kiriting!");
// let userNumber5 = +prompt("5-sonni kiriting!");
// alert(userNumber1 + "sonini 1-kiritdingiz!");
// alert(userNumber2 + "sonini 2-kiritdingiz!");
// alert(userNumber3 + "sonini 3-kiritdingiz!");
// alert(userNumber4 + "sonini 4-kiritdingiz!");
// alert(userNumber5 + "sonini 5-kiritdingiz!");

// 7. **5 dan 15 gacha bo‘lgan sonlarni teskari tartibda ekranga chiqaring.**
// for (let num = 15; num >= 5; num--) {
//   console.log(num);
// }

// 9. **Foydalanuvchi tomonidan kiritilgan 10 ta sonning yig‘indisini hisoblab ekranga chiqaring.**
// let userNumber = +prompt("Son kiriting!");
// let res = 0;
// for (let num = 1; num <= userNumber; num += 1) {
//   if (num < 10) {
//     res = res + num;
//     console.log(res);
//   }
// }

// 10. **1 dan 50 gacha bo‘lgan sonlardan 5 ga bo‘linadiganlarini ekranga chiqaring.**
// for (let num = 1; num <= 50; num++) {
//   if (num % 2 == 1) {
//     console.log(num + "  5ga bolinmaydi");
//   } else {
//     console.log(num + "  5ga bolinadi");
//   }
// }

// 11. **100 dan 1 gacha bo‘lgan sonlarni teskari tartibda ekranga chiqaring.**
// for (let num = 100; num >= 1; --num) {
//   console.log(num);
// }

// 12. **1 dan 100 gacha bo‘lgan sonlarning yig‘indisini hisoblab, natijani ekranga chiqaring.**
// let res = 0;
// for (let num = 1; num <= 100; num++) {
//   res = res + num;
//   console.log(res);
// }

// 13. **Foydalanuvchi tomonidan kiritilgan ikki son orasidagi barcha sonlarni ekranga chiqaring.**
// let userNumber1 = +prompt("1-sonni kiriting");
// let userNumber2 = +prompt("2-sonni kiriting");
// for (let num = userNumber1; num <= userNumber2; num++) {
//   console.log(num);
// }

// 15. **1 dan 100 gacha bo‘lgan sonlarning yig‘indisini hisoblab, natijani ekranga chiqaring.**
// for (let num = 1; num <= 20; num++) {
//   let res = num ** 2;
//   console.log(num + " ning kvadrati: " + res);
// }

// 16. **1 dan 100 gacha bo‘lgan sonlar orasidan faqat 7 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring.**
// for (let num = 1; num <= 100; num++) {
//   if (num % 7 == 0) {
//     console.log(num);
//   }
// }

// 17. **1 dan 10 gacha bo‘lgan sonlarning ko‘paytma jadvalini ekranga chiqaring.**
// for (let num = 1; num <= 10; num++) {
//   for (let userNumber = 1; userNumber <= 10; userNumber++) {
//     console.log(`${num} * ${userNumber} = ${num * userNumber}`);
//   }
//   console.log(" ");
// }

// 18. **Foydalanuvchi tomonidan kiritilgan sonning barcha bo‘linuvchilarini toping va ularning yig‘indisini ekranga chiqaring.**
// let userNumber = +prompt("son kiriting");
// let res = 0;
// for (let num = 1; num <= userNumber; num++) {
//   if (userNumber % num === 0) {
//     res += num;
//     console.log(num + " bu bo‘linuvchi!");
//   } else {
//     console.log(inum+ " bu bo‘linuvchi emas.");
//   }
// }
// console.log("Bo‘linuvchilar yig‘indisi: " + yigindi);

// 19. **1 dan 50 gacha bo‘lgan sonlarning orasidan toq sonlar yig‘indisini hisoblab, natijani ekranga chiqaring.**
// let res = 0;
// for (let num = 1; num <= 50; num++) {
//   if (num % 2 == 1) {
//     res = res + num;
//     console.log("Son --> " + num);
//     console.log(" ");
//     console.log("Yig'indisi --> " + res);
//   }
// }

// 20. **Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi barcha juft sonlarni ekranga chiqaring.**
// let userNumber1 = +prompt("1-sonni kiriting");
// let userNumber2 = +prompt("2-sonni kiriting");
// for (let num = userNumber1; num <= userNumber2; num++) {
//   if (num % 2 == 0) {
//     console.log(num);
//   }
// }

// 21. **1 dan 100 gacha bo‘lgan sonlarning ichida faqat toq sonlar yig‘indisini ekranga chiqaring.**
// let res = 0;
// for (let num = 1; num <= 100; num++) {
//   if (num % 2 == 1) {
//     res = res + num;
//     console.log("Son --> " + num);
//     console.log(" ");
//     console.log("Yig'indisi --> " + res);
//   }
// }

// 22. **Foydalanuvchi tomonidan kiritilgan sonning faktorialini hisoblang va natijani ekranga chiqaring.**
// let userNumber = +prompt("Son kiriting");
// console.log(`${userNumber ** userNumber}`);

// 23. **1 dan 50 gacha bo‘lgan barcha sonlarni ekranga chiqaring, lekin faqat 3 va 5 ga bo‘linadigan sonlarni chiqarmang.**
// for (let num = 1; num <= 50; num++) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log(num + " 3 ga yoki 5 ga bolinmaydi");
//   }
//   console.log(num);
// }

// 24. **1 dan 30 gacha bo‘lgan sonlar ichida 4 va 6 ga qoldiqsiz bo‘linadigan sonlarni ekranga chiqaring.**
// for (let num = 1; num <= 30; num++) {
//   if (num % 4 == 0 && num % 6 == 0) {
//     console.log(num);
//   }
// }

// 25. **Foydalanuvchi tomonidan kiritilgan ikkita sonning orasidagi sonlardan faqat toq sonlarni ekranga chiqaring va ularning yig‘indisini toping.**
let userNumber1 = +prompt("1-sonni kiriting!");
let userNumber2 = +prompt("2-sonni kiriting!");
let res = 0;
for (let num = userNumber1; num <= userNumber2; num++) {
  if (num % 2 == 1) {
    res = res + num;
    console.log(res);
  }
}
