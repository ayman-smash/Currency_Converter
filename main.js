fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ffbb0f7938c94dbe98c49242855e730a").then((result) => {
    // console.log(result);
    let myData = result.json();
    // console.log(myData);
    return myData;
})
.then ((currency) => {

    let amount = document.querySelector("#amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");
    let aedPrice = document.querySelector(".aed span");
    let convert = document.querySelector(".conv-button");

    convert.onclick = function () {
        egpPrice.innerHTML = Math.round(amount.value * currency.rates["EGP"]);
        sarPrice.innerHTML = Math.round(amount.value * currency.rates["SAR"]);
        aedPrice.innerHTML = Math.round(amount.value * currency.rates["AED"]);
    };

    // console.log(currency.rates);
    // console.log(currency.rates["EGP"]);
    // console.log(currency.rates["SAR"]);
    // console.log(currency.rates["AED"]);
});



