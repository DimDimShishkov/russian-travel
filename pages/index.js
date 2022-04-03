function text_en() {
    document.getElementsByClassName('header__lang-link_ru')[0].style.textDecoration = 'none';
    document.getElementsByClassName('header__lang-link_en')[0].style.textDecoration = 'underline';
    var elements = document.getElementsByClassName("text_ru");

    for(var i = 0; i < elements.length; ++i){
      elements[i].style.display = 'none';
    }
    var elements = document.getElementsByClassName("text_en");

    for(var i = 0; i < elements.length; ++i){
      elements[i].style.display = 'block';
    }
}

function text_rus() {
    document.getElementsByClassName('header__lang-link_ru')[0].style.textDecoration = 'underline';
    document.getElementsByClassName('header__lang-link_en')[0].style.textDecoration = 'none';
    var elements = document.getElementsByClassName("text_en");
    for(var i = 0; i < elements.length; ++i){
      elements[i].style.display = 'none';
    }
    var elements = document.getElementsByClassName("text_ru");
    for(var i = 0; i < elements.length; ++i){
      elements[i].style.display = 'block';
    }
}