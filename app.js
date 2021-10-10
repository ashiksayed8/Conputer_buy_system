// Button Action Catch Here======
function getCommonButtonAction(commonFleid) {
    let inputCost =parseInt(document.getElementById(commonFleid).innerText);
    return inputCost;
}

//Memory Event Section====
document.getElementById('lowest-memory').addEventListener('click', function() {
    let memoryCost = getCommonButtonAction('memory-cost')
    if(memoryCost === 180) {
        getTotalPrice(180 ,true);
        document.getElementById('memory-cost').innerText = 0;
    }
})
document.getElementById('highest-memory').addEventListener('click', function() {
    let memoryCost = getCommonButtonAction('memory-cost')
    if(memoryCost === 0) {
        getTotalPrice(180 ,false);
        document.getElementById('memory-cost').innerText = 180;
    }
})

//Storage Event Section====
document.getElementById('lowest-storage').addEventListener('click', function() {
    let storageCost = getCommonButtonAction('storage-cost')
    if(storageCost === 100) {
        getTotalPrice(100 ,true);
        document.getElementById('storage-cost').innerText = 0;
    }
    else if(storageCost === 180) {
        getTotalPrice(180 ,true);
        document.getElementById('storage-cost').innerText = 0;
    }
})
document.getElementById('medium-storage').addEventListener('click', function() {
    let storageCost = getCommonButtonAction('storage-cost')
    if(storageCost === 0) {
        getTotalPrice(100 ,false);
        document.getElementById('storage-cost').innerText = 100;
    }
    else if(storageCost === 180) {
        getTotalPrice(180 ,true);
        getTotalPrice(100 ,false);
        document.getElementById('storage-cost').innerText = 100;
    }

})
document.getElementById('highest-storage').addEventListener('click', function() {
    let storageCost = getCommonButtonAction('storage-cost')
    if(storageCost === 0) {
        getTotalPrice(100 ,false);
        document.getElementById('storage-cost').innerText = 180;
    }
    else if(storageCost === 100) {
        getTotalPrice(100 ,true);
        getTotalPrice(180 ,false);
        document.getElementById('storage-cost').innerText = 180;
    }
})

//Delivery cost Event Section====
document.getElementById('delivery-free').addEventListener('click', function() {
    let deliveryCharge  = getCommonButtonAction('delivery-charge')
    if(deliveryCharge === 20) {
        getTotalPrice(20 ,true);
        document.getElementById('delivery-charge').innerText = 0;
    }
})
document.getElementById('delivery-cost').addEventListener('click', function() {
    let deliveryCharge = getCommonButtonAction('delivery-charge')
    if(deliveryCharge === 0) {
        getTotalPrice(20 , false);
        document.getElementById('delivery-charge').innerText = 20;
    }
    
})


//Total Price Calculate Section================
function getTotalPrice (cost,isdecrease) {
    let bestPrice = parseInt(document.getElementById('total-price').innerText);
    if(isdecrease) {
        let totalPrice = bestPrice - cost;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('total-amount').innerText = totalPrice;
    } 
    else {
        let totalPrice = bestPrice + cost;
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('total-amount').innerText = totalPrice;
    }
   
}


//Total amount section with apply coupon=========
document.getElementById('btn-coupon').addEventListener('click', function() {
    let inputCoupon = document.getElementById('input-coupon');
    let inputValue = inputCoupon.value;
    if(inputValue == 'stevekaku') {
      let totalPrice = parseInt(document.getElementById('total-price').innerText);
      let totaldiscount = parseInt(20 * totalPrice / 100);
      totalPrice = totalPrice - totaldiscount ;
      document.getElementById('total-amount').innerText = totalPrice;
      inputCoupon.value = '';
    }
    
})

