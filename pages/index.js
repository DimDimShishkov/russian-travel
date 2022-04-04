function text_en() {
    document.getElementsByClassName('header__lang-link_ru')[0].style.textDecoration = 'none';
    document.getElementsByClassName('header__lang-link_en')[0].style.textDecoration = 'underline';

    document.getElementsByClassName('lead__title_ru')[0].style.display = 'none';
    document.getElementsByClassName('lead__title_en')[0].style.display = 'block';
    document.getElementsByClassName('lead__subtitle_ru')[0].style.display = 'none';
    document.getElementsByClassName('lead__subtitle_en')[0].style.display = 'block';
    document.getElementsByClassName('lead__caption_ru')[0].style.display = 'none';
    document.getElementsByClassName('lead__caption_en')[0].style.display = 'block';

    document.getElementsByClassName('intro__title_ru')[0].style.display = 'none';
    document.getElementsByClassName('intro__title_en')[0].style.display = 'block';
    document.getElementsByClassName('intro__text_ru')[0].style.display = 'none';
    document.getElementsByClassName('intro__text_en')[0].style.display = 'block';
    document.getElementsByClassName('intro__list_ru')[0].style.display = 'none';
    document.getElementsByClassName('intro__list_en')[0].style.display = 'block';

    document.getElementsByClassName('place__paragraph_ru')[0].style.display = 'none';
    document.getElementsByClassName('place__paragraph_en')[0].style.display = 'block';
}

function text_rus() {
    document.getElementsByClassName('header__lang-link_ru')[0].style.textDecoration = 'underline';
    document.getElementsByClassName('header__lang-link_en')[0].style.textDecoration = 'none';
    
    document.getElementsByClassName('lead__title_en')[0].style.display = 'none';
    document.getElementsByClassName('lead__title_ru')[0].style.display = 'block';
    document.getElementsByClassName('lead__subtitle_en')[0].style.display = 'none';
    document.getElementsByClassName('lead__subtitle_ru')[0].style.display = 'block';
    document.getElementsByClassName('lead__caption_en')[0].style.display = 'none';
    document.getElementsByClassName('lead__caption_ru')[0].style.display = 'block';

    document.getElementsByClassName('intro__title_en')[0].style.display = 'none';
    document.getElementsByClassName('intro__title_ru')[0].style.display = 'block';
    document.getElementsByClassName('intro__text_en')[0].style.display = 'none';
    document.getElementsByClassName('intro__text_ru')[0].style.display = 'block';
    document.getElementsByClassName('intro__list_en')[0].style.display = 'none';
    document.getElementsByClassName('intro__list_ru')[0].style.display = 'block';

    document.getElementsByClassName('place__paragraph_en')[0].style.display = 'none';
    document.getElementsByClassName('place__paragraph_ru')[0].style.display = 'block';
}

