// total pricing interactive event handler code
document.getElementById('memory8-btn').addEventListener('click', function () {
    const memoryTotal = document.getElementById('memory-price');
    memoryTotal.innerText = 0;
    const memoryPrice = parseInt(memoryTotal.innerText);


    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);



    const storageTotal = document.getElementById('storage-price');
    const storagePrice = parseInt(storageTotal.innerText);


    const deliveyTotal = document.getElementById('delivery-price');
    const deliveryPrice = parseInt(deliveyTotal.innerText);

    const newMemoryTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;



    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newMemoryTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newMemoryTotal);




});

document.getElementById('memory16-btn').addEventListener('click', function () {


    const memoryTotal = document.getElementById('memory-price');
    memoryTotal.innerText = 180;
    const memoryPrice = parseInt(memoryTotal.innerText);


    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);



    const storageTotal = document.getElementById('storage-price');
    const storagePrice = parseInt(storageTotal.innerText);


    const deliveyTotal = document.getElementById('delivery-price');
    const deliveryPrice = parseInt(deliveyTotal.innerText);

    const newMemoryTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;



    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newMemoryTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newMemoryTotal);


});
document.getElementById('storage-btn-256GB').addEventListener('click', function () {


    const storageTotal = document.getElementById('storage-price');
    storageTotal.innerText = 0;
    const storagePrice = parseInt(storageTotal.innerText);

    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);

    const memoryTotal = document.getElementById('memory-price');
    const memoryPrice = parseInt(memoryTotal.innerText);



    const deliveyTotal = document.getElementById('delivery-price');
    const deliveryPrice = parseInt(deliveyTotal.innerText);
    const newStorageTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;





    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newStorageTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newStorageTotal);



});
document.getElementById('storage-btn-512GB').addEventListener('click', function () {


    const storageTotal = document.getElementById('storage-price');
    storageTotal.innerText = 100;
    const storagePrice = parseInt(storageTotal.innerText);


    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);

    const memoryTotal = document.getElementById('memory-price');
    const memoryPrice = parseInt(memoryTotal.innerText);


    const deliveyTotal = document.getElementById('delivery-price');
    const deliveryPrice = parseInt(deliveyTotal.innerText);
    const newStorageTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;


    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newStorageTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newStorageTotal);


});
document.getElementById('storage-btn-1TB').addEventListener('click', function () {


    const storageTotal = document.getElementById('storage-price');
    storageTotal.innerText = 180;
    const storagePrice = parseInt(storageTotal.innerText);

    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);

    const memoryTotal = document.getElementById('memory-price');
    const memoryPrice = parseInt(memoryTotal.innerText);

    const deliveyTotal = document.getElementById('delivery-price');
    const deliveryPrice = parseInt(deliveyTotal.innerText);

    const newStorageTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;

    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newStorageTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newStorageTotal);


});

document.getElementById('delivery-btn').addEventListener('click', function () {


    const deliveyTotal = document.getElementById('delivery-price');
    deliveyTotal.innerText = 0;
    const deliveryPrice = parseInt(deliveyTotal.innerText);

    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);
    const memoryTotal = document.getElementById('memory-price');
    const memoryPrice = parseInt(memoryTotal.innerText);
    const storageTotal = document.getElementById('storage-price');
    const stroagePrice = parseInt(storageTotal.innerText);

    const newDeliveryTotal = bestPrice + memoryPrice + stroagePrice + deliveryPrice;




    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newDeliveryTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newDeliveryTotal);


});


document.getElementById('delivery-btn-with-cost').addEventListener('click', function () {


    const deliveryTotal = document.getElementById('delivery-price');
    deliveryTotal.innerText = 20;
    const deliveryPrice = parseInt(deliveryTotal.innerText);

    const bestPriceInput = document.getElementById('best-price');
    const bestPrice = parseInt(bestPriceInput.innerText);
    const memoryTotal = document.getElementById('memory-price');
    const memoryPrice = parseInt(memoryTotal.innerText);
    const storageTotal = document.getElementById('storage-price');
    const storagePrice = parseInt(storageTotal.innerText);

    const newDeliveryTotal = bestPrice + memoryPrice + storagePrice + deliveryPrice;





    const totalPriceInput = document.getElementById('total-price');
    totalPriceInput.innerText = parseInt(newDeliveryTotal);

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = parseInt(newDeliveryTotal);


});

// promo btn interactive code


document.getElementById('promo-btn').addEventListener('click', function () {

    const grandTotal = document.getElementById('grand-total');
    const previousGrandTotal = parseFloat(grandTotal.innerText);



    const promoCode = document.getElementById('promo-code');
    const promoCodeInput = promoCode.value;
    if (promoCodeInput == 'stevekaku') {
        const newGrandTotalParcent = (previousGrandTotal * 20) / 100;
        const newGrandTotal = previousGrandTotal - newGrandTotalParcent;
        grandTotal.innerText = parseFloat(newGrandTotal);



    }
    promoCode.value = '';


});
function disabledBtn() {
    document.getElementById("promo-btn").disabled = true;
    document.body.style.backgroundColor = 'opacity 0.2'
}






