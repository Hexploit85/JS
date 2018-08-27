
var question = function(pytanie,odpowiedz, poprawnaOdpowiedz) {
   this.pytanie = pytanie;
   this.odpowiedz = odpowiedz;
   this.poprawnaOdpowiedz = poprawnaOdpowiedz;
};

var kosmos = new question('Jak nazywa sie ksiezyc Saturna?',['1. Tytan', '2.Pluto', '3.Donald'],'Tytan' );
var hacking = new question ('Ktora z wymienionych odpowiedzi jest malwarem', ['1.Hippo', '2.Trojan', '3.Kotek'],"Trojan");
var muzyka = new question ('Co nie jest gatunkiem muzycznym',['1.Triphop','2. Beatdrop','3.Elektronika'], 'Beatdrop');

var zestawPytan =[kosmos, hacking, muzyka];


question.prototype.odpowiedzUzytkownika = function(){
  prompt(zestawPytan[Math.floor(Math.random()*3)]);
};

console.log(zestawPytan );

//question.odpowiedzUzytkownika();
//console.log(question.odpowiedzUzytkownika);



/////////////////////////CLOSURES/////////////////////////////////////////////
/*

function pytaniaKwalifikacyjne(stanowisko){
  return function(imie){
      if (stanowisko === 'SCCM')
  {
          console.log (imie + ' opisz swoje doswiadczenie z SCCMem ');
    }
      else if (stanowisko === 'AD')
  {

          console.log( imie + ' co to jest GPO');
  }
      else
  {
        console.log (imie +', powiedz czym sie zajmowales poprzednio');

  }
}
};

pytaniaKwalifikacyjne('wachlarz')('Jacek');
 */
///////////////////////Sort/////////////////
/*
var doPosortowania= [34, 6636,43, 13 ,864, 4533, 4, 53,2, 75476, 8, 642, 125 ,176, 09];
var posortowane =[];
var c;


function sortowanie(zbior){

          var a;
          var b;


          for( i = 0; i < zbior.length; i++){
              if (zbior[i]>zbior[i+1]){
                a =zbior[i];
                b =zbior[i+1];
                zbior[i] = b;
                zbior[i+1] = a;
               console.log(zbior);
               c++;
              };
          };


};

while(doPosortowania.length != c){
 sortowanie(doPosortowania);
}

//sortowanie(doPosortowania);
//console.log(posortowane);
//console.log(doPosortowania[doPosortowania.length-1]);






*/
///////////////////////IFFE - Data privacy in JS///////////////////
/*

(function (){
  var a = 15;
  console.log(a);
})

();
console.log(a);


*/
///////////////FIRST CLASS FUNCTION (returna  function from function)/////////////////

/*

function pytaniaKwalifikacyjne(stanowisko){
  if (stanowisko === 'SCCM'){
    return function(imie){
      console.log (imie + ' opisz swoje doswiadczenie z SCCMem ');
    }
  }else if (stanowisko === 'AD') {
      return function(imie){
      console.log( imie + ' co to jest GPO');}
  }else{
    return function(imie){
      console.log (imie +', powiedz czym sie zajmowales poprzednio');
    }
  }
}

var SCCM = pytaniaKwalifikacyjne('SCCM');

SCCM('Marek');

pytaniaKwalifikacyjne('AD')('Jedrek');







*/
//////FUNCTION THAT USES FUNCTION AS AN INPUT/////////////
/*
var lata =[1985,2020,2030,1900,5000,1000];

function policz (arr, fn){

    var arrRes =[];
    for (var i=0; i <arr.length; i++){
      arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calculateAge(el) {
  return 2018 - el;
}


var costam = policz (lata, calculateAge);

console.log(costam);

*/

////////////////PROTOTYPY//////////////////
/*
var newProto = function(name, year, score, nickname){

  this.name = name;
  this.year = year;
  this.score = score;
  this.nickname = nickname;

};

newProto.prototype.nowafunkcja = function(){
  console.log(this.name + ' ma ksywke ' + this.nickname);
}




var Albert = new newProto('Albert', 1985, 2000, 'nullbyte');
var Norbert = new newProto('Norbert', 1985, 2000, 'Norbi');
var Sebek = new newProto('Sebastian', 1985, 2000, 'Sebcio');

newProto.prototype.costam = 'hexed';

console.log(Albert.costam);
console.log(Norbert.costam);
*/

//Pusty konstruktor funckcji///////

/*
var costamgdziestam = function(){
};

//zmienna prototypowa
costamgdziestam.prototype.name = 'null';

//nowy objekt z prototypu
var einstein = new costamgdziestam;
console.log(einstein.name);
*/






/*var name = "Kamil"; var number = 50;

alert("BIIIIIIIIIIIITCHHHHH PPPPPLLLLLEEEEEEASSSSEEEEE");
var pytanie = prompt("niga u mad?");
console.log(pytanie);
console.log(typeof pytanie);

var year = 2018;
var data =1985;
var full = 18;

var alkochol = year - data >= full;
console.log("Mozna chlac?  - "+alkochol);
*/
 // BMR = 66.5 + ( 13.75 × weight in kg ) + ( 5.003 × height in cm ) — ( 6.755 × age in years )
/*
 var kg;
 var cm;
 var age;
 var bmr,tdr;

kg = 82;
cm = 185;
age = 33;

bmr = 66.5 +(13.75*kg)+(5.003*cm)-(6.755*age);
tdr = bmr*1.55;

console.log('Twoje bmr wynosi ' +bmr+ ' dodajac aktywnosc fizyczna spalasz '+tdr);
*/

//////////////////Funkcje//////////////////////
/*

function obliczWiek(rokUrodzenia){
  return 2018-rokUrodzenia;
}

var wiek = obliczWiek(1985);
var wiek1 = obliczWiek(1949);
console.log(wiek);
console.log(wiek1);


function wiekDoEmerytury(rok, imie){
  var rok = obliczWiek(rok);
  var emerytura = 65-rok;
  console.log(imie+' odchodzi an emeryture za '+emerytura+' lata');
}

wiekDoEmerytury(1985,'Kamil');

*/
//////////////Function Expression//////////////////////
/*

var coRobisz = function(praca, imie){
  switch(praca){
    case 'smieciarz':
    return imie + ' pracuje na wysypisku';
    case 'magik':
    return imie + ' wyciaga krolikki z kapelusza';
    case 'astronauta':
    return imie + ' krazy po orbicie';
    default:
    return  imie + 'jest na bezrobociu';
  }
}

console.log(coRobisz('smieciarz', 'John'));
console.log(coRobisz('what', 'Mark'));
console.log(coRobisz('magik', 'Tom'));
*/

/////////////////////////////Arrays///////////////////////////////////////

/*

var names = ['John', 'Ralf', 'Steave'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

/////Mutate array/////////

names[1] = 'Ben';
names[names.length-1 ] = 'Mary';
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teaecher', false];

john.push('blue');   //adds to an end of array
john.unshift('mr.'); //adds to begining
console.log(john);
john.pop();    //remove from end
john.shift();  //remove from front
console.log(john);

console.log(john.indexOf(1990));
*/

/////////////////////CODING CHALLANGE/////////////////
/*
var a=125,b=48,c=268;
var paidTips = [];
function tip(ammountPaid){
  if(ammountPaid<50){
    paidTips[0]=(ammountPaid*0.2);
  }else if(ammountPaid >= 50 && ammountPaid < 200){
    paidTips[1]=(ammountPaid*0.15)
  }else{
    paidTips[2]=(ammountPaid*0.1)
  }
}

tip(a);
tip(b);
tip(c);

console.log(paidTips);
console.log(a+paidTips[0],b+paidTips[1],c+paidTips[2]);
*/

///////////////////Objects//////////////////////
/*

var name = ['alfred'];

console.log(name[0]);


var names = ['John'];

console.log(names[0]);

*/
///////////////////////////////////////////////////////////
/*
var wycieczkaKamila ={

  paidMoney: [124,48,268,18,42],
  a:[],
  b:[],
  calculateTip: function(){

    for(i=0;i<this.paidMoney.length;i++)
  {
    if(this.paidMoney[i]<50){
      this.a.push(this.paidMoney[i]* 0.2);
      this.b.push((this.paidMoney[i]) + (this.a[i]));
}
else if (this.paidMoney>=50 && this.paidMoney<200) {
  this.a.push(this.paidMoney[i]* 0.15);
  this.b.push((this.paidMoney[i]) + (this.a[i]));
  }
  else {
    this.a.push(this.paidMoney[i]* 0.1);
    this.b.push((this.paidMoney[i]) + (this.a[i]));
  }
    }
  return this.a,this.b;
                          }

}

wycieczkaKamila.calculateTip();

console.log(wycieczkaKamila.a);
console.log(wycieczkaKamila.b);

*/
/*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*//*/*/

/*


var wycieczkaKarola ={

  paidMoney: [77,375,110,45],
  a:[],
  b:[],
  calculateTip: function(){

    for(i=0;i<this.paidMoney.length;i++)
  {
    if(this.paidMoney[i]<100){
      this.a.push(this.paidMoney[i]* 0.2);
      this.b.push((this.paidMoney[i]) + (this.a[i]));
}
else if (this.paidMoney>=100 && this.paidMoney<300) {
  this.a.push(this.paidMoney[i]* 0.1);
  this.b.push((this.paidMoney[i]) + (this.a[i]));
  }
  else {
    this.a.push(this.paidMoney[i]* 0.25);
    this.b.push((this.paidMoney[i]) + (this.a[i]));
  }
    }
  return this.a,this.b;
                          }

}

wycieczkaKarola.calculateTip();

console.log(wycieczkaKarola.a);
console.log(wycieczkaKarola.b);


var sexy = [52,34,85,67,78];

function policzonko(sumthing){

var a =0;

for(i=0; i<sumthing.length;i++)

{
 a = a +sumthing[i];

}


return a/sumthing.length;
}



console.log(policzonko(wycieczkaKarola.a));
console.log(policzonko(wycieczkaKamila.a));
*/
