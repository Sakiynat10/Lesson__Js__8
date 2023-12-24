//String1
// function kattaHarflarChiqarish(n) {
//     if (n >= 1 && n <= 26) {
//         let result = "";
//         for (let i = 0; i < n; i++) {
//             let harf = String.fromCharCode('A'.charCodeAt(0) + i);
//             result += harf + " ";
//         }
//         console.log(result.trim());
//     } else {
//         console.log("Noto'g'ri kirish! Nning qiymati 1 dan 26 gacha bo'lishi kerak.");
//     }
// }

// let n = parseInt(prompt("Nni kiriting (1 dan 26 gacha):"));
// kattaHarflarChiqarish(n);


//String2
// function belgiTuriAniqla(belgi) {
//     let belgiKodi = belgi.charCodeAt(0);

//     if (!isNaN(belgiKodi)) {
//         console.log("digit");
//     } else if ((belgiKodi >= 65 && belgiKodi <= 90) || (belgiKodi >= 97 && belgiKodi <= 122)) {
//         console.log("lotin");
//     } else {
//         console.log("Nol");
//     }
// }

// let kiritilganBelgi = prompt("Belgini kiriting: ");
// belgiTuriAniqla(kiritilganBelgi);




//String3
// function utf16KodiniChiqar(satr) {
//     if (satr.length > 0) {
//         let birinchiBelgiKodi = satr.charCodeAt(0);
//         let oxirgiBelgiKodi = satr.charCodeAt(satr.length - 1);

//         console.log("Birinchi belgi UTF-16 kodi: " + birinchiBelgiKodi);
//         console.log("Oxirgi belgi UTF-16 kodi: " + oxirgiBelgiKodi);
//     } else {
//         console.log("Satr bo'sh!");
//     }
// }

// Foydalanuvchi kiritishi
// let satr = prompt("Satrni kiriting: ");
// utf16KodiniChiqar(satr);


//String4
// function iboratSatrYaratish(N, belgi) {
//     let satr = belgi.repeat(N);
//     console.log("Natija: " + satr);
// }

// let N = parseInt(prompt("N natural sonini kiriting: "));
// let belgi = prompt("Kiritilgan belgini kiriting: ");
// iboratSatrYaratish(N, belgi);



//String5
// function teskariTartib(satr) {
//     let teskariSatr = satr.split('').reverse().join('');
//     console.log("Teskari tartib: " + teskariSatr);
// }

// // Foydalanuvchi kiritishi
// let satr = prompt("Satrni kiriting: ");
// teskariTartib(satr);



// String6
// function getStringStars(satr, N) {
//     let satrTenglar = satr.split('');
//     let jadval = Math.ceil(satrTenglar.length / N);
//     let indeks = 0;

//     for (let i = 0; i < jadval; i++) {
//         satrTenglar.splice(indeks + N * i, 0, "*");
//         indeks++;
//     }

//     let yangiSatr = satrTenglar.join('');
//     return yangiSatr;
// }


// let satr = prompt("Satrni kiriting: ");
// let N = parseInt(prompt("N natural sonini kiriting: "));
// let natija = getStringStars(satr, N);
// console.log("Natija: " + natija);



//String7
// function getStringStars(satr, N) {
//     let satrTenglar = satr.split('');
//     let jadval = Math.ceil(satrTenglar.length / N);
//     let indeks = 0;

//     for (let i = 0; i < jadval; i++) {
//         satrTenglar.splice(indeks + N * i, 0, "*");
//         indeks++;
//     }

//     let yangiSatr = satrTenglar.join('');
//     return yangiSatr;
// }

// let satr = prompt("Satrni kiriting: ");
// let N = parseInt(prompt("N natural sonini kiriting: "));
// let natija = getStringStars(satr, N);
// console.log("Natija: " + natija);



//String8
// function kichikHarflarSoni(satr) {
//     let lotinKirillHarflar = /[a-zа-я]/g;
//     let kichikHarflar = satr.match(lotinKirillHarflar);

//     if (kichikHarflar) {
//         console.log("Satrda kichik lotin va kirill harflarining umumiy soni: " + kichikHarflar.length);
//     } else {
//         console.log("Satrda kichik lotin va kirill harfi yo'q.");
//     }
// }


// let satr = prompt("Asilbek");
// kichikHarflarSoni(satr);

// console.log(kichikHarflarSoni)


//String9
// function kichikLotinHarflar(satr) {
//     let yangiSatr = satr.replace(/[A-Z]/g, function(match) {
//         return match.toLowerCase();
//     });

//     console.log("Natija: " + yangiSatr);
// }

//String10

// function almashtir(satr) {
//     let yangiSatr = satr.replace(/[a-zA-Z]/g, function(match) {
//         if (match === match.toUpperCase()) {
//             return match.toLowerCase();
//         } else {
//             return match.toUpperCase();
//         }
//     });

//     console.log("Natija: " + yangiSatr);
// }

// let satr = prompt("Satrni kiriting: ");
// almashtir(satr);


//String11
// function tekshirish(satr) {
//     let son = Number(satr);
    
//     if (!isNaN(son) && Number.isInteger(son)) {
//         console.log(1);
//     } else if (!isNaN(son) && Number.isFinite(son)) {
//         console.log(2);
//     } else {
//         console.log(0);
//     }
// }

// let satr = prompt("Qiymat kiriting");
// tekshirish(satr);




//String12
// function getInverseNumber(n) {
//     let nStr = n.toString();
//     let inverseStr = nStr.split('').reverse().join('');
//     return inverseStr;
// }

// let n = prompt("Sonni kiriting: ");
// let inverseNumber = getInverseNumber(n);
// console.log("Teskari: " + inverseNumber);



//String13
// function hisoblash(ifoda) {
//     let qiymat = 0;
//     let arifmetikBelgilar = ifoda.split(/[0-9]+/);

//     for (let i = 0; i < arifmetikBelgilar.length; i++) {
//         let belgi = arifmetikBelgilar[i].trim();
//         if (belgi === '+') {
//             qiymat += Number(arifmetikBelgilar[i + 1]);
//         } else if (belgi === '-') {
//             qiymat -= Number(arifmetikBelgilar[i + 1]);
//         }
//     }

//     return qiymat;
// }


// let ifoda = prompt("Arifmetik ifodani kiriting: ");
// let natija = hisoblash(ifoda);
// console.log("Ifoda qiymati: " + natija);


//String14

// function yangiSatr(N1, N2, S1, S2) {
//     let dastlabkiBelgilar = S1.slice(0, N1);
//     let oxirgiBelgilar = S2.slice(-N2);
//     let yangiSatr = dastlabkiBelgilar + oxirgiBelgilar;
//     return yangiSatr;
// }

// let N1 = parseInt(prompt("N1 sonini kiriting: "));
// let N2 = parseInt(prompt("N2 sonini kiriting: "));
// let S1 = prompt("S1 satrini kiriting: ");
// let S2 = prompt("S2 satrini kiriting: ");

// let natija = yangiSatr(N1, N2, S1, S2);
// console.log("Yangi satr: " + natija);



//String15
// function orttirish(S, C) {
//     let yangiSatr = "";
//     for (let i = 0; i < S.length; i++) {
//         if (S[i] === C) {
//             yangiSatr += C + C;
//         } else {
//             yangiSatr += S[i];
//         }
//     }
//     return yangiSatr;
// }

// let S = prompt("Satrni kiriting: ");
// let C = prompt("Belgini kiriting: ");

// let natija = orttirish(S, C);
// console.log("Natija: " + natija);



//String16

// function qoshish(S1, S2, C) {
//     let yangiSatr = "";
//     for (let i = 0; i < S1.length; i++) {
//         yangiSatr += S1[i];
//         if (S1[i] === C) {
//             yangiSatr += S2;
//         }
//     }
//     return yangiSatr;
// }


// let S1 = prompt("S1 satrini kiriting: ");
// let S2 = prompt("S2 satrini kiriting: ");
// let C = prompt("Belgini kiriting: ");

// let natija = qoshish(S1, S2, C);
// console.log("Natija: " + natija);



//String17

// function takrorlanishSanasi(S1, S2) {
//     let takrorlanishSanasi = 0;
//     let indeks = -1;

//     while ((indeks = S1.indexOf(S2, indeks + 1)) !== -1) {
//         takrorlanishSanasi++;
//     }

//     return takrorlanishSanasi;
// }

// let S1 = prompt("S1 satrini kiriting: ");
// let S2 = prompt("S2 satrini kiriting: ");

// let takrorlanishlar = takrorlanishSanasi(S1, S2);
// console.log("S2 satri S1 satriga " + takrorlanishlar + " marta takrorlangan.");


//String18
// function ochiribTashlash(S1, S2) {
//     let indeks = S1.indexOf(S2);

//     if (indeks !== -1) {
//         S1 = S1.slice(0, indeks) + S1.slice(indeks + S2.length);
//     }

//     return S1;
// }

// let S1 = prompt("S1 satrini kiriting: ");
// let S2 = prompt("S2 satrini kiriting: ");

// let natija = ochiribTashlash(S1, S2);
// console.log("Natija: " + natija);




//String19

// function ochiribTashlash(S1, S2) {
//     let indeks = S1.indexOf(S2);

//     if (indeks !== -1) {
//         S1 = S1.slice(0, indeks) + S1.slice(indeks + S2.length);
//     }

//     return S1;
// }

// let S1 = prompt("S1 satrini kiriting: ");
// let S2 = prompt("S2 satrini kiriting: ");

// let natija = ochiribTashlash(S1, S2);
// console.log("Natija: " + natija);


//String20

// function ozgartirish(S1, S2, S3) {
//     let indeks = S1.indexOf(S2);

//     if (indeks !== -1) {
//         S1 = S1.substring(0, indeks) + S3 + S1.substring(indeks + S2.length);
//     }

//     return S1;
// }


// let S1 = prompt("S1 satrini kiriting: ");
// let S2 = prompt("S2 satrini kiriting: ");
// let S3 = prompt("S3 satrini kiriting: ");

// let natija = ozgartirish(S1, S2, S3);
// console.log("Natija: " + natija);