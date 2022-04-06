function text_en() {
    document.getElementById('header__lang-link_en').classList.add('header__lang-link_active');
    document.getElementById('header__lang-link_ru').classList.remove('header__lang-link_active');

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
    document.getElementById('header__lang-link_ru').classList.add('header__lang-link_active');
    document.getElementById('header__lang-link_en').classList.remove('header__lang-link_active');

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

