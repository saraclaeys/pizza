$(document).ready(function () {
    //opent het keuzemenu bij aanklikken
    $('.tablehead').click(function () {
        $(this).next('div').slideToggle('swing');
    });
    //sluit het huidig keuzemenu bij aanklikken andere div
    $('.tablehead').click(function () {
        $('.menu-hidden').hide();
    });
    //opent opnieuw het keuzemenu dat wordt aangeklikt
    $('.tablehead').click(function () {
        $(this).next('div').slideToggle('swing');
    });
});


function invoice() {

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // size ////////////////////////////////////////////////////////////////////////////////////////////

    var size = document.querySelector('input[name="size"]:checked').value;
    console.log("size=" + size);
    var sizePrice = 0;
    if (size === "Small") {
        sizePrice = 6;
    };
    if (size === "Medium") {
        sizePrice = 10;
    };
    if (size === "Large") {
        sizePrice = 14;
    };
    if (size === "Extra-Large") {
        sizePrice = 16;
    };
    console.log("sizePrice=" + sizePrice);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // cheese //////////////////////////////////////////////////////////////////////////////////////////

    var cheese = document.querySelector('input[name="cheese"]:checked').value;
    console.log("cheese=" + cheese);
    var cheesePrice = 0;
    if (cheese === "Extra") {
        if (size === "Small") {
            cheesePrice = 1;
        } else if (size === "Medium") {
            cheesePrice = 2;
        } else if (size === "Large") {
            cheesePrice = 3;
        } else {
            cheesePrice = 4;
        };
    };
    console.log("cheesePrice=" + cheesePrice);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // crust ///////////////////////////////////////////////////////////////////////////////////////////

    var crust = document.querySelector('input[name="crust"]:checked').value;
    console.log("crust=" + crust);
    var crustPrice = 0
    if (crust = "Cheese") {
        crustPrice = 3;
    };
    console.log("crustPrice=" + crustPrice);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // sauce //////////////////////////////////////////////////////////////////////////////////////////

    var sauce = document.querySelector('input[name="sauce"]:checked').value;
    console.log("sauce=" + sauce);

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // meat ///////////////////////////////////////////////////////////////////////////////////////////

    var meatPrice = 0
    var meat = document.getElementsByName("meat");
    var meatSelect = [];
    var meatDisplay = "";
    for (var i = 0; i < meat.length; i++) {
        if (meat[i].checked) {
            meatSelect.push(meat[i].value);
        };
    };
    console.log("meatSelect=" + meatSelect);
    if (meatSelect.length === 1) {
        meatDisplay = meatSelect[0];
    } else if (meatSelect.length > 1) {
        for (i = 0; i < meatSelect.length; i++) {
            meatDisplay += meatSelect[i];
            if (i < (meatSelect.length - 1)) {
                meatDisplay += ", ";
            };
        };
    };
    meatPrice = meatSelect.length * 2;
    console.log("meatPrice=" + meatPrice);
    if (meatSelect.length === 0) {
        meatDisplay = "No Meats";
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // vegetables //////////////////////////////////////////////////////////////////////////////////////

    var vegPrice = 0;
    var veg = document.getElementsByName("veg");
    var vegSelect = [];
    var vegDisplay = "";
    for (var i = 0; i < veg.length; i++) {
        if (veg[i].checked) {
            vegSelect.push(veg[i].value);
        };
    };
    console.log("vegSelect=" + vegSelect);

    if (vegSelect.length > 4) {
        vegPrice = 2;
    };
    console.log("vegPrice=" + vegPrice);

    if (vegSelect.length === 1) {
        vegDisplay = vegSelect[0];
    } else if (vegSelect.length > 1) {
        for (i = 0; i < vegSelect.length; i++) {
            vegDisplay += vegSelect[i];
            if (i < (vegSelect.length - 1)) {
                vegDisplay += ", ";
            };
        };
    };

    if (vegSelect.length === 0) {
        vegDisplay = "No Vegetables";
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // calculating total //////////////////////////////////////////////////////////////////////////////

    var totalPrice = (vegPrice + meatPrice + crustPrice + cheesePrice + sizePrice);
    console.log("totalPrice=" + totalPrice);

    $("#sizecalc").html(size + " Pizza");
    $("#sizeprice").html(" € " + sizePrice + ",00");
    $("#cheesecalc").html(cheese + " Cheese");
    $("#cheeseprice").html("+ " + cheesePrice + ",00");
    $("#crustcalc").html(crust + " Crust");
    $("#crustprice").html("+ " + crustPrice + ",00");
    $("#saucecalc").html(sauce + " Sauce");
    $("#sauceprice").html("+ 0,00");
    $("#meatcalc").html(meatDisplay);
    $("#meatprice").html("+ " + meatPrice + ",00");
    $("#vegcalc").html(vegDisplay);
    $("#vegprice").html("+ " + vegPrice + ",00");
    $("#totalprice").html(" € " + totalPrice + ",00");

};