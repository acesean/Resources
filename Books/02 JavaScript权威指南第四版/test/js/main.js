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