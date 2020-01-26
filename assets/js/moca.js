var downArrow      = document.querySelector('.down-arrow'),
    drink          = document.querySelector('.js--drink'),
    food           = document.querySelector('.js--food'),
    drinkContainer = document.querySelector('.container'),
    foodMenu       = document.querySelector('.js--food--menu'),
    drinkMenu      = document.querySelector('.js--drink--menu'),
    popup          = document.querySelector('.popup'),
    popupFood      = document.querySelector('.popup-food'),
    goBack         = document.querySelectorAll('.js--back'),
    details        = document.querySelector('.details');


// for all the event listener
function eventFunc(selector, event, callback){
    selector.addEventListener(event, function(e){
        // stops propagation
        e.preventDefault();
        callback();
    });
}

function disapear(s){
    s.style.display = 'none';
}
function appear(s){
    s.style.display = 'flex';
}
function scrollToTop(){
    details.scrollIntoView({behavior: "smooth"});
}

eventFunc(downArrow, 'click', scrollToTop);


drink.addEventListener('click', function(){
    setTimeout(function(){
        appear(popup);
    }, 150);
});
food.addEventListener('click', function(){
    setTimeout(function(){
        appear(popupFood);
    }, 150);
});

foodMenu.addEventListener('click', function(){
    setTimeout(function(){
        disapear(popup);
    }, 150);
    appear(popupFood);
    
});

drinkMenu.addEventListener('click', function(){
    setTimeout(function(){
        disapear(popupFood);
    }, 150);
    appear(popup);
    
});

// turning NOde list into array like object    
var backArr = Array.prototype.slice.call(goBack);

backArr[0].addEventListener('click', function(){
    disapear(popup);
});

backArr[1].addEventListener('click', function(){
    disapear(popupFood);
});


//downArrow.addEventListener('click', function(){
//    details.scrollIntoView({behavior: "smooth"});
////   window.scroll({top: 620,  behavior: "smooth"});
//});

//function popupMenu(selector, mSecond){
//    setTimeout(function(){
//        appear(selector);
//    }, mSecond);
//}
//function popOutMenu(selector, mSecond){
//    setTimeout(function(){
//        disapear(selector);
//    }, mSecond);   
//}




//STUDY THIS
//function action1() {alert('Form submited')}
//function action2() {alert('Button clicked')}
//
//function eventFunc(selector, event, callback) {
//  document.querySelector(selector).addEventListener(event, function(e) {
//    e.preventDefault();
//    callback()
//  })
//}
//
//eventFunc('form', 'submit', action1)
//eventFunc('button', 'click', action2)
    