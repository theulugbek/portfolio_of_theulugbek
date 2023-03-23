var body = document.querySelector(".body");
var theme = document.querySelector(".ichi");
var change = document.querySelector(".change");
var container = document.querySelector(".container");
var link = document.querySelector(".link");
var bar = document.querySelector(".bar");
var white = document.querySelector(".white");
var black = document.querySelector(".black");
var topside = document.querySelector(".top_side");
var box = document.querySelector(".box");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");


change.addEventListener('click', function(){
    container.classList.toggle('containerjs');
    theme.classList.toggle('ichijs');
    body.classList.toggle('bodyjs');
    topside.classList.toggle('top_sidejs');
    box.classList.toggle('boxjs');
    box1.classList.toggle('box1js');
    box2.classList.toggle('box2js');
});







var list = document.querySelector('.ul');
var btn = document.querySelector('.btn');
var change = document.querySelector('.change');


btn.addEventListener('click', function(){
    // menuni yopish
    if(list.classList.contains('showlist')){
        hide();
    }
    //menuni ochish
    else {
        show();
    }
});
var removeClasses = function(){
    list.classList.remove('showlist', 'hidelist');
}
var show = function(){
    list.classList.add('showlist');
    change.classList.add('changejs');
    btn.classList.add('changebtn');
    list.removeEventListener('animationend', removeClasses);
}
var hide = function(){
    list.classList.add('hidelist');
    btn.classList.remove('changebtn');
    change.classList.remove('changejs');
    list.addEventListener('animationend', removeClasses);
}