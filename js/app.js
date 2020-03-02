function checkSum(num1, num2) {
    if (num1 > num2) {
        alert("Số thứ nhất lớn hơn số thứ hai ");
        return ;
    }
    alert("Tổng của hai số nhập vào là: " + (num1 + num2));
}

function myFunction() {
    let input1 = document.getElementById('num1-input');
    let input2 = document.getElementById('num2-input');
    checkSum(+input1.value,+input2.value);
}