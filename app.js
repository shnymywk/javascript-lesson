// ------- 基礎編 -------

// Q1.変数nickname,ageに自分の名前と年齢を代入し、
// 文字列連結で以下のようにコンソールに出力してください。

// 私のニックネームはごっしーです年齢は28歳です。

let nickname = "わき";
let age = 30;

console.log(
  "私のニックネームは" + nickname + "です。年齢は" + age + "歳です。",
);

// Q2.変数languagesに
// JavaScript,PHP,Ruby,Python,Goの5つの値を持つ配列を代入し、
// その中からJavaScript,Pythonを取得し、
// テンプレートリテラルを用いて以下のようにコンソールに出力してください。

// 私の好きな言語はJavaScriptです。次はPythonを勉強してみたいです。

let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
let template = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;

console.log(template);

// Q3.下記の変数userを使用し
// 26 をコンソールに出力してください。

let user = {
  name: "John",
  age: 26,
  bloodType: "A",
  favorite: "card",
};

console.log(user.age);

// Q4.下記の変数playerListを使用し
// The Legend of Zeldaをコンソールに出力してください。

let playerList = [
  {
    name: "John",
    age: 26,
    favorites: ["Card Game", "Basket Ball", "Programming"],
  },
  {
    name: "Bob",
    age: 33,
    favorites: ["Tinder", "The Legend of Zelda"],
  },
  {
    name: "Michael",
    age: 22,
    favorites: ["Football", "Smash Bros."],
  },
];

console.log(playerList[1].favorites[1]);

// Q5.Q4で定義した変数playerListを使用し、
// John,Bob,Michaelの年齢の平均値を計算した結果をコンソールに出力してください。

let totalAge = 0;

for (let i = 0; i < playerList.length; i++) {
  totalAge += playerList[i].age;
}

const averageAge = totalAge / playerList.length;

console.log(averageAge);

// Q6.Helloとコンソールに出力する関数sayHelloを定義し、実行してください。
// 変数sayWorldにWorldとコンソールに出力する無名関数を代入し、実行してください。

function sayHello() {
  console.log("Hello");
}
sayHello();

const sayWorld = function () {
  console.log("World");
};
sayWorld();

// Q7.Q3で定義した変数userに'2000-09-27'を値とするbirthdayプロパティを追加してください。
// Q3で定義した変数userにHello！とコンソールに出力するメソッド
// sayHelloを追加し、実行してください。
// ※ いずれもQ3で定義した変数userを直接書き換えないこと

// let user = {
//   name: "John",
//   age: 26,
//   bloodType: "A",
//   favorite: "card",
// };

user.birthday = "2000-09-27";
user.sayHello = function () {
  console.log("Hello!");
};

user.sayHello();

// Q8.下記の空のオブジェクト calc を使用し、以下問題を解いてください。

// let calc = {};

// 2つの引数x,yの和をコンソールに出力するaddメソッドを定義し、7になるように実行して下さい。
// 2つの引数x,yの差をコンソールに出力するsubtractメソッドを定義し、10になるように実行して下さい。
// 2つの引数x,yの積をコンソールに出力するmultiplyメソッドを定義し、49になるように実行して下さい。
// 2つの引数x,yの商をコンソールに出力するdivideメソッドを定義し、5になるように実行して下さい。

let calc = {
  add(x, y) {
    return x + y;
  },

  subtract(x, y) {
    return x - y;
  },

  multiply(x, y) {
    return x * y;
  },

  divide(x, y) {
    return x / y;
  },
};

console.log(calc.add(5, 2));
console.log(calc.subtract(12, 2));
console.log(calc.multiply(7, 7));
console.log(calc.divide(25, 5));

// Q9.2つの引数x,yを受け取り、xをyで割った剰余を返り値とする関数remainderを定義し、
// 5と3を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。

const remainder = (x, y) => {
  return x % y;
};

console.log(remainder(5, 3));

// Q10.下記のconsole.log(x);においてコンソールに1が出力されることはなく、
// x is not defined（変数xが定義されていない）というエラーが出力されます。
// その理由を以下2つの単語を使用しapp.___jsにコメントアウトで回答してください。

// スコープ
// 参照

// function foo() {
//   let x = 1;
// }
// console.log(x);

// xは関数内で定義されていることからスコープは関数内に留まる。
// そのため関数外から関数内の定義を参照することができない。

// ------- 応用編 -------

// Q1.標準組み込みオブジェクトMathを使用し、0~9のランダムな整数をコンソールに出力してください。

const randomNumber = Math.floor(Math.random() * 10);
// floorは切り捨て。
// randomは0~0.9999999の間の数値をランダム生成
console.log(randomNumber);

// Q2.関数setTimeoutを使用し、3秒後に以下のようにコンソールに出力してください。
// Hello World!

const greet = () => {
  console.log("Hello World!");
};

setTimeout(greet, 3000);

// Q3.変数numに任意の数値を代入し、
// 下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

// numが0/より大きければnum is greater than 0
// numが0より小さけれ ばnum is less than 0
// numが0であればnum is 0

const num = 0;
if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 0) {
  console.log("num is less than 0");
} else if (num === 0) {
  console.log("num is 0");
}

// else if を用いる場合は三項演算子よりも実際に書いたほうがいい。
// 三項演算子はシンプルなif文でアロー関数などに用いることが多い。

const numReturn =
  num > 0
    ? "num is greater than 0"
    : num < 0
      ? "num is less than 0"
      : "num is 0";
console.log(numReturn);

// Q4.変数 numbers に空の配列を代入した後、
// 0 ~ 99 までの数字を変数 numbers に全て追加し、
// 値が追加された状態の変数 numbers をコンソールに出力してください

const numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Q5.以下の変数 mixed から 要素を一つずつ取り出し、
// 下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

const mixed = [4, "2", 5, "8", "9", 0, 1];

// Number であり偶数の時は even
// Number であり奇数の時は odd
// Number 以外の時は not number

for (const mix of mixed) {
  if (typeof mix !== "number") {
    console.log("not number");
  } else if (mix % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// 三項演算子ver

for (const mix of mixed) {
  console.log(
    typeof mix !== "number" ? "not number" : mix % 2 === 0 ? "even" : "odd",
  );
}
