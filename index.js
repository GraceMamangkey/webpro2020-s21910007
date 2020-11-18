//Array 

/*let nilai1 = 90;
let nilai2 = 80;
let nilai3 = 75;
let nilai4 = 85; */

let nilai = [91, 84, 75, 95, 85]; //Array literal

for (let i=0; i<nilai.length; 1++)
{
    console.log("Nilai = ", nilai[i] = 5);
}

console.log(nilai);
nilai[2] = 91; //ganti nilai
console.log[nilai.length - 1];

let grace = ["Grace", 20, true];
console.log(grace[grace.length - 1]); //length untuk mengetahui panjang dari array
console.log(grace);

//mengubah setiap elemen menjadi string toString()
console.log(grace.toString());
//join()
console.log(grace.join(" - "));

//pop()
grace.pop();
console.log(grace.pop(" - "));
//push()
grace.push(true);
grace.push("hello");
console.log(grace.join(" - "));

//shift()
grace.shift();
console.log(grace.join (" - "));

//unshift()
grace.unshift("Grace");
grace.unshift("Prof");
console.log(grace.join (" - "));

//Menambah, Menghapus, dan Mengganti Element Array dengan 
//splice()
let nilai = [90, 80, 75, 95, 85];
nilai.splice(3, 0, 25, 35, 45);
console.log(nilai);

//Menggabungkan Lebih Dari Satu Array dengan 
//concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);

console.log(makanan); // Output: ["pisang", "apel", "jeruk", "tomat", "bayam", "wortel", "kedelai", "kacang tanah", "kacang polong"]


//Mengambil Element Array dengan 
//slice()
let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
let cemilanGurih = cemilan.slice(0, 3);
let cemilanManis = cemilan.slice(3);

console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

//Mengurutkan Array dengan 
//sort()
let nilai = [91, 84, 75, 95, 85];
nilai.sort();
console.log(nilai);

//Memutar urutan Array dengan 
//reverse()
let nilai = [91, 84, 75, 95, 85];
buah.reverse();
console.log(buah); // Output: ["Jambu", "Mangga", "Apel", "Jeruk"]