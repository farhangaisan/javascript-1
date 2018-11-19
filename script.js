console.log("JavaScript");
// confirm("virus telah masuk");

//string
let firstText="this is a string";
let secondText="another string";
let combinedText='${firstText} and ${secondText}';
console.log(combinedText);

//number
let pureDecimal=2;
let floatNumber=2.24;
//debugger;
pureDecimal=2+2; // result:4
pureDecimal=1+2+4; // result:1.5
console.log (pureDecimal)

//boolean
let e = true;

//array
let array=["a",1,true,undefined,null];
array[0]; // result: "a"
array[1]; // result: 1
array[4]; // result:null
array.length; // result:5
console.log(array.length)

//object
let object ={
    name: "farhan maulana",
    unversity:"UIB",
    year: 2018,
    friends: ["gilang","Jessy","Shawn"]
};
console.log(object);
console.log(object.unversity);

moment.locale('id');
let tgl = moment();
console.log(moment().format('LLLL'));
let tgl2 = tgl.format('dddd, YYYY DD MMMM');
let pesan=`hari ini adalah ${tgl2}`
console.log(pesan);

// let nilai= window.prompt("nilai ku adalah")
// let result=''
// if (nilai>=90) {
//     result="A";    
// }else if (nilai>=80) {
// result=("B")
// }else if(grade>=70) {
//     result=("C")
// }else if (nilai>=60) {
// result=("D")
// } else {
//     result=("F")
// }
// window.alert(`nilai mu adalah ${result}`)

const sentenceA = "halo semuanya"
const sentenceB = "selamat tinggal"

console.log(sentenceA);
console.log(sentenceB);

const sentenceC= sentenceA + 'dan'+ sentenceB;
const sentenceD= `${sentenceA} ${sentenceB}`;

console.log(sentenceA.toUpperCase(sentenceA));
console.log(sentenceB.toLowerCase(sentenceB));

array =["lamborghini","ferrari","BMW"]
for (x=0;x<array.length;x++){
    let mobil=array[x];
    console.log(mobil)
}

