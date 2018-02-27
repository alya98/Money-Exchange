// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var money = {}, tmp;
    if (currency > 10000) {
    money.error = "You are rich, my friend! We don't have so much coins for exchange";
        return money;
    }
    if (currency / 50 >= 1) {
        money.H = Math.floor(currency / 50);

    }
    tmp = currency % 50;
    if (tmp / 25 >= 1) {
        money.Q = Math.floor(tmp / 25);

    }
    tmp = tmp % 25;
    if (tmp / 10 >= 1) {
        money.D = Math.floor(tmp / 10);

    }
    tmp = tmp % 10;
    if (tmp / 5 >= 1) {
        money.N = Math.floor(tmp / 5)
    }
    tmp = tmp % 5;
    if (tmp !== 0) money.P = tmp;

    return money;
}
       // console.log(makeExchange(44));  


