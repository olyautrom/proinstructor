/* Маска для телефона */
$(document).ready(function(){
    $(".tel-mask").each(function () {
        $(this).mask('+7 (999) 999-99-99');
    });
}); 
/* Маска для телефона */

function validate_form ( ) {
    if (document.forms.form-modal-recording.elements.record-skillsform.value == "empty") {
        alert('Пожалуйста, выберите начальные навыки');
        document.form-modal-recording.record-skills.focus();
        return false
    }

}

/* Расскрытие и скрытие блока all-the-way */
$("#selector-briefly").click(function() {
    if(!this.classList.contains('active')) {
        $(this).toggleClass("active");         
        $("#selector-detail").toggleClass("active");
        $('.detail').addClass("close");
    }
})
$("#selector-detail").click(function() {
    if(!this.classList.contains('active')) {
        $(this).toggleClass("active");         
        $("#selector-briefly").toggleClass("active");
        $('.detail').removeClass("close");
    }
})
/* Расскрытие и скрытие блока all-the-way */

document.addEventListener('DOMContentLoaded', function() {
    var openPhone = document.querySelectorAll('.openPhone');
    openPhone.forEach(function(item) {
        item.addEventListener('click', function(e) {
            this.classList.toggle("arrow-up");
            this.nextElementSibling.classList.toggle("show");
        });
    });
    
});

$(document).ready(function(){
    var cut = document.getElementsByClassName('news-block__intro');
    for( var i = 0; i < cut.length; i++ ) {
      cut[i].innerText = cut[i].innerText.slice(0,205) + '...';
    }
});

$(document).ready(function(){
    var height = document.getElementById('news-block__item').clientHeight;
    document.getElementById('news-block').style.height = height + 'px';
});

$(document).ready(function(){
    var x = window.matchMedia("(max-width: 720px)")
    longTitle(x)
    x.addListener(longTitle)
});

/* расскрытие новостей */
$(document).ready(function(){
    var h = document.getElementById('news-block');
    if (h.clientHeight == h.scrollHeight) {
        $('.news-more').addClass("close");
    }
}); 

function changeHeightNews() {
    var new_height = document.getElementById('news-block').clientHeight + document.getElementById('news-block__item').offsetHeight;
    document.getElementById('news-block').style.height = new_height + 'px';
    if (new_height == document.getElementById('news-block').scrollHeight) {
        $('.news-more').addClass("close");
    }
}
/* расскрытие новостей */

$(document).ready(function(){

    $('#foto-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../image/slide-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../image/slide-right.svg"></button>',
    });
});

$(document).ready(function(){
    $('#reviews-slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 12000,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev review"><img src="../image/slide-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next review"><img src="../image/slide-right.svg"></button>',
    });
});

$(document).ready( function() {
    $("#fl_inp").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html(filename);
    });
    $("#fl_input").change(function(){
         var fileNewName = $(this).val().replace(/.*\\/, "");
         document.getElementById("fl_empty").innerHTML = fileNewName;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    /* Записываем в переменные массив элементов-кнопок и подложку.
    Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close'),
    changeButtons = document.querySelectorAll('.js-change-modal');
    
    /* Перебираем массив кнопок */
    modalButtons.forEach(function(item){
        
        /* Назначаем каждой кнопке обработчик клика */
        item.addEventListener('click', function(e) {
             /* Предотвращаем стандартное действие элемента. Так как кнопку разные
                люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
                Нужно подстраховаться. */
             e.preventDefault();
            
             /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
                и будем искать модальное окно с таким же атрибутом. */
             var modalId = this.getAttribute('data-modal'),
                 modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            
            
             /* После того как нашли нужное модальное окно, добавим классы
                подложке и окну чтобы показать их. */
             modalElem.classList.add('active');
             overlay.classList.add('active');
        }); // end click
        
    }); // end foreach
    
    closeButtons.forEach(function(item) {
    
        item.addEventListener('click', function(e) {
             var parentModal = this.closest('.modal');
            
             parentModal.classList.remove('active');
             overlay.classList.remove('active');
        });
    
    }); // end foreach
    
    changeButtons.forEach(function(item){
    
        item.addEventListener('click', function(e) {
             var parentModal = this.closest('.modal');
            
             parentModal.classList.remove('active');
              /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
                и будем искать модальное окно с таким же атрибутом. */
             var modalId = this.getAttribute('data-modal'),
                 modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            
            
             /* После того как нашли нужное модальное окно, добавим классы
                подложке и окну чтобы показать их. */
             modalElem.classList.add('active');
            
        });
    
    }); // end foreach
    
    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        
        if (key == 27) {
        
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
        }, false);
        
        overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
    


}); // end ready


    document.addEventListener('DOMContentLoaded', function() {

    var categoryStart1 = document.getElementById("transmission-1-category-c0");
    var categoryStart2 = document.getElementById("transmission-2-category-c0");
    var categoryStartRadio1 = document.getElementById('radio-1-category-c0');
    var categoryStartRadio2 = document.getElementById('radio-2-category-c0');
    var categoryStartRadio3 = document.getElementById('radio-3-category-c0');
    
    var categoryVip1 = document.getElementById("transmission-1-category-vip");
    var categoryVip2 = document.getElementById("transmission-2-category-vip");
    var categoryVipRadio = document.getElementById('radio-1-category-vip');
    
    var categoryNext1 = document.getElementById("transmission-1-category-dop");
    var categoryNext2 = document.getElementById("transmission-2-category-dop");
    var categoryNextRadio1 = document.getElementById('radio-1-category-dop');
    var categoryNextRadio2 = document.getElementById('radio-2-category-dop');
    var categoryNextRadio3 = document.getElementById('radio-3-category-dop');
    
    var resultStart = document.getElementById('category-price-c0');
    var resultVip = document.getElementById('category-price-vip');
    var resultNext = document.getElementById('category-price-dop');
    var resultNewStart = document.getElementById('category-new-price-c0');
    var resultNewVip = document.getElementById('category-new-price-vip');
    var resultNewNext = document.getElementById('category-new-price-dop');
    
    
    categoryStart1.addEventListener('click', function(e) {
        categoryStartRadio1.nextElementSibling.firstElementChild.innerHTML = '28';
        categoryStartRadio1.value = '28';
        categoryStartRadio2.nextElementSibling.firstElementChild.innerHTML = '40';
        categoryStartRadio2.value = '40';
        categoryStartRadio3.nextElementSibling.firstElementChild.innerHTML = '56';
        
        
        if(categoryStartRadio1.checked){
            resultStart.innerHTML = `24 900 ₽`;
        }
        else if(categoryStartRadio2.checked){
            resultStart.innerHTML = `30 300 ₽`;
        }
        else if(categoryStartRadio3.checked){
            resultStart.innerHTML = `37 500 ₽`;
        }

    });
    categoryStart2.addEventListener('click', function(e) {
        categoryStartRadio1.nextElementSibling.firstElementChild.innerHTML = '26';
        categoryStartRadio1.value = '26';
        categoryStartRadio2.nextElementSibling.firstElementChild.innerHTML = '38';
        categoryStartRadio2.value = '38';
        categoryStartRadio3.nextElementSibling.firstElementChild.innerHTML = '54';
        categoryStartRadio3.value = '54';
        
        
        if(categoryStartRadio1.checked){
            resultStart.innerHTML = `26 000 ₽`;
        }
        else if(categoryStartRadio2.checked){
            resultStart.innerHTML = `32 600 ₽`;
        }
        else if(categoryStartRadio3.checked){
            resultStart.innerHTML = `41 400 ₽`;
        }
    });
    categoryStartRadio1.addEventListener('click', function(e) {
        if (categoryStart1.checked) {
            resultStart.innerHTML = `24 900 ₽`;
        }
        else if (categoryStart2.checked) {
            resultStart.innerHTML = `26 000 ₽`;
        }
    });
    categoryStartRadio2.addEventListener('click', function(e) {
        if (categoryStart1.checked) {
            resultStart.innerHTML = `30 300 ₽`;
        }
        else if (categoryStart2.checked) {
            resultStart.innerHTML = `32 600 ₽`;
        }
    });
    categoryStartRadio3.addEventListener('click', function(e) {
        if (categoryStart1.checked) {
            resultStart.innerHTML = `37 500 ₽`;
        }
        else if (categoryStart2.checked) {
            resultStart.innerHTML = `41 400 ₽`;
        }
    });
    categoryVip1.addEventListener('click', function(e) {
        categoryVipRadio.nextElementSibling.firstElementChild.innerHTML = '+11';
        categoryVipRadio.value = '+11';
        resultVip.innerHTML = `69 000 ₽`;
    }); 
    categoryVip2.addEventListener('click', function(e) {
        categoryVipRadio.nextElementSibling.firstElementChild.innerHTML = '+10';
        categoryVipRadio.value = '+10';
        resultVip.innerHTML = `72 000 ₽`;
    });
    categoryNext1.addEventListener('click', function(e) {
        if(categoryNextRadio1.checked){
            resultNext.innerHTML = `7 500 ₽`;
        }
        if(categoryNextRadio2.checked){
            resultNext.innerHTML = `15 000 ₽`;
        }
        if(categoryNextRadio3.checked){
            resultNext.innerHTML = `22 500 ₽`;
        }
    });
    categoryNext2.addEventListener('click', function(e) {
        if(categoryNextRadio1.checked){
            resultNext.innerHTML = `10 000 ₽`;
        }
        if(categoryNextRadio2.checked){
            resultNext.innerHTML = `20 000 ₽`;
        }
        if(categoryNextRadio3.checked){
            resultNext.innerHTML = `30 000 ₽`;
        }
    });
    categoryNextRadio1.addEventListener('click', function(e) {
        if(categoryNext1.checked){
            resultNext.innerHTML = `7 500 ₽`;
        }
        if(categoryNext2.checked){
            resultNext.innerHTML = `10 000 ₽`;
        }
    });
    categoryNextRadio2.addEventListener('click', function(e) {
        if(categoryNext1.checked){
            resultNext.innerHTML = `15 000 ₽`;
        }
        if(categoryNext2.checked){
            resultNext.innerHTML = `20 000 ₽`;
        }
    });
    categoryNextRadio3.addEventListener('click', function(e) {
        if(categoryNext1.checked){
            resultNext.innerHTML = `22 500 ₽`;
        }
        if(categoryNext2.checked){
            resultNext.innerHTML = `30 000 ₽`;
        }
    });
    
    
    var transmission, hours, skills; 
    
    document.getElementById("transfer-info-c0").addEventListener('click', function(e) {
        if (categoryStart1.checked) {
            transmission = 'МКПП';
        }
        else if (categoryStart2.checked) { 
            transmission = 'АКПП';
        }
        if (categoryStartRadio1.checked) {
            hours = categoryStartRadio1.value;
        }
        else if (categoryStartRadio2.checked) {
            hours = categoryStartRadio2.value;
        }
        else if (categoryStartRadio3.checked) {
            hours = categoryStartRadio3.value;
        }
        skills = document.getElementById("select-category-c0").value;
        document.getElementById("info-from-category").value = transmission + ', ' + hours + ' часов. ' + skills + '. Стоимость ' + resultStart.textContent;
    });
    
    document.getElementById("transfer-info-vip").addEventListener('click', function(e) {
        if (categoryVip1.checked) {
            transmission = 'МКПП';
        }
        else if (categoryVip2.checked) { 
            transmission = 'АКПП';
        }
        hours = 'ТЕОРИЯ ' + categoryVipRadio.value;
        skills = document.getElementById("select-category-vip").value;
        document.getElementById("info-from-category").value = transmission + ', ' + hours + '. ' + skills + '. Стоимость ' + resultVip.textContent;
    });
    
    document.getElementById("transfer-info-dop").addEventListener('click', function(e) {
        if (categoryNext1.checked) {
            transmission = 'МКПП';
        }
        else if (categoryNext2.checked) { 
            transmission = 'АКПП';
        }
        if (categoryNextRadio1.checked) {
            hours = categoryStartRadio1.value;
        }
        else if (categoryNextRadio2.checked) {
            hours = categoryStartRadio2.value;
        }
        else if (categoryNextRadio3.checked) {
            hours = categoryStartRadio3.value;
        }
        skills = document.getElementById("select-category-dop").value;
        document.getElementById("info-from-category").value = transmission + ', ' + hours + ' часов. ' + skills + '. Стоимость ' + resultNext.textContent;
    });
});
