// 例1-1 一个简单的JavaScript程序
document.write("<h1>例1-1</h1><h2>Table of Factorials</h2>");
for (i = 1, fact = 1; i < 10; i++, fact *= i) {
    document.write(i + "! = " + fact);
    document.write("<br>");
}

// 例1-3 借贷计算器
function calculate() {
    // 从表单中获得用户输入的数据。假定他们完全有效。
    // 把利息从百分比转换成十进制数。
    // 把年利率转换成月利率。
    // 把年支付额转换成月支付额。
    var principal = document.loandata.principal.value;
    var interest = document.loandata.interest.value / 100 / 12;
    var payment = document.loandata.years.value * 12;

    // 下面计算月支付额，使用了很少的数学函数。
    var x = Math.pow(1 + interest, payment); // Math.pow(x,y) 返回x的y次幂 
    var monthly = (principal * x * interest) / (x - 1);

    // 检查结果是否是无穷大函数。如果不是，就显示出来。
    if (!isNaN(monthly) && (monthly != Number.POSITIVE_INFINITY) && (monthly != Number.NEGATIVE_INFINITY)) {
        document.loandata.payment.value = round(monthly);
        document.loandata.total.value = round(monthly * payment);
        document.loandata.totalinterest.value = round((monthly + payment) - principal);
    }
    // 否则, 用户输入的数据是无效的，因此什么都不显示。
    else {
        document.loandata.payment.value = "";
        document.loandata.total.value = "";
        document.loandata.totalinterest.value = "";
    }
}

// 以下是个简单的方法，它将数字舍入成两位小数的形式
function round(x) {
    return Math.round(x * 100) / 100;
}

/*------------- 斐波纳挈数 -------------------*/
document.write("<h2>Table of Fibonacci Numbers</h2>");
for (i = 0, j = 1, k = 0, fib = 0; i < 50; i++, fib = j + k, j = k, k = fib) {
    document.write("Fibonacci (" + i + ") =" + fib);
    document.write("<br>");
}

/*-------------------- 函数 ---------------------- */
// 有时函数没有return语句，所以它没有返回值
function print(msg) {
    document.write(msg, "<br>");
}

// 计算并返回两点之间的距离
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// 递归函数，计算阶乘的值
function factorial(x) {
    if (x <= 1) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

// 嵌套函数
function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }

    return Math.sqrt(square(a) + square(b));
}

// 构造函数
var f = new Function("x", "y", "return x*y");
// 等价于
function f(x, y) {
    return x * y;
}

// 函数直接量
function f(x) {
    return x * x;
}                    // function 语句
var f = new Function("x", "return x*x");    // Function()构造函数
var f = function (x) {
    return x * x
};           // 函数直接量

// 函数直接量创建的是未命名函数，但是它的语法也规定它可以指定函数名，这
// 在编写调用自身的递归函数时非常有用。例如：
var f = function fact(x) {
    if (x <= 1) {
        return 1;
    }
    else {
        return x * fact(x - 1);
    }
}

a[0] = function (x) {
    return x * x; // 定义一个函数并保存它
}
a.sort(function (a, b) {
    return a - b;  // 定义一个函数；把它传递给另一函数
});
var tensquared = (function (x) {
    retrurn
    x * x;
})(10);          // 定义一个函数，并调用它

// 函数作为变量
var a = square(4); // a 存放数字16
var b = square; // b引用的函数和square的作用相等
var c = b(5); // c存放数字25

// 函数作为对象的属性
var o = new Object();
o.square = new Function("x", "return x*x"); // 注意Function()构造函数
y = o.square(16); // y等于256

// 函数可以没有函数名，就像我们将函数赋给数组元素时那样
var a = new Array(3);
a[0] = function (x) {
    return x * x;   // 注意函数直接量
}
a[1] = 20;
a[2] = a[0](a[1]); // a[2]存放400

// 例7-2：将函数作为数据的方法
// 此处我们定义一些简单的函数
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
// 以下的函数可以将上面的某个函数作为参数
// 它的两个参数是两个运算符
function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}

// 我们可以调用该函数来计算值(2+3)+(4*5);
var i = operate(add, operate(add, 2, 3), operate(multiply(4, 5));

// 函数直接量，把函数存放在一个关联数组中
var operators = new Object();
operators["add"] = function (x, y) {
    return x + y;
}
operators["substract"] = function (x, y) {
    return x - y;
}
operators["multiply"] = function (x, y) {
    return x * y;
}
operators["divide"] = function (x, y) {
    return x / y;
}
operators["pow"] = Math.pow(); // 也用于预定义函数

// 以下的函数将运算符名作为参数，在数组中检索这个运算符
// 然后对运算数调用检索到的函数
// 注意调用这个运算符函数的语法
function operate2(op_name, operand1, operand2) {
    if (operators[op_name] == null) {
        return "unkown operator";
    }
    else {
        return operators[op_name](operand1, operand2);
    }
}
// 我们可采用如下方式调用该函数计算值("hello"+" "+"world");
var j = operate2("add", "hello", operate2("add", " ", "workd"));

// arguments 检测参数
function f(x, y, z) {
    // 首先检查传递的参数数量是否正确
    if (arguments.length != 3) {
        throw new Error("function f called width " + arguments.length + "arguments, but it expects 3 arguments.");
    }
    // 下面运行真正的代码
}

function max(){
    var m=Number.NEGATIVE_INFINITY;  // 负无穷大
    // 遍历所有参数，检索并保存其中最大的参数
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>m){
            m=arguments[i];
        }
        // 返回最大参数
        return m;
    }
}
var largest =max(1,10,200,3000000,0,-35);
alert(largest);






































