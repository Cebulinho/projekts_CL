
document.addEventListener('DOMContentLoaded', function () {

    var button = document.querySelector('button');
    var message = document.querySelector('.message');
    var female = document.querySelector('#female');
    var male = document.querySelector('#male');

    animation();
    randomLines()

    /* EVENT LISTENERS ON BUTTONS */

    button.addEventListener('click', function (e) {
       e.preventDefault();
        validate();
    });

    male.addEventListener('click', function () {
       female.checked = false;

    });

    female.addEventListener('click', function () {
        male.checked = false;

    });

    /* RANDOM LINES IN LEFT CONTAINER */

    function randomLines(){
        var lines = document.querySelectorAll('.line');
        var min = 30;
        var max = 70;
        var colors = ["#1cd4a3", "#531fc0", "#ffffff"];

        for (var i = 0;i <= lines.length - 1;i++){
            lines[i].style.width = Math.random() * (max - min) + min + "%";
            lines[i].style.marginLeft = Math.random() * (max - min) + min + "px";
            lines[i].style.background = colors[Math.floor(Math.random() * colors.length)]

        }
    }

    /* BASIC VALIDATION */

    function validate(){
        var name = document.querySelector('#name');
        var number = document.querySelector('#number');
        var day = document.querySelector('#day');
        var month = document.querySelector('#month');
        var year = document.querySelector('#year');

        check();

        function check(){
            if ((((name.value === '') || !isNaN(name.value)) || ((number.value === '' || number.value.length < 9))
                || ((day.value === '') || isNaN(day.value)) || (month.value === '') || (((year.value === '')
                || isNaN(year.value)) || isNaN(year.value))) || (female.checked == false) && (male.checked == false)) {
                showErrorMessage();
            }
            else {
                showSuccessMessage();
            }
        }
        function showErrorMessage(){
            message.style.display = "inline-block";
            message.innerHTML = "Formularz zawiera błędy";
        }
        function showSuccessMessage(){
            message.style.display = "inline-block";
            message.innerHTML = "Wysłano";
        }

    };

    /* ANIMATIONS CONTROL */

    function animation(){

        var leftContainer = document.querySelector('.left-container');
        var rightContainer = document.querySelector('.right-container');
        var rightNav = document.querySelector('.right-nav');
        var animationContainer = document.querySelector(".animation-container");
        var h1 = document.querySelector("h1");

        function addAnim(){
            button.classList.add('slideButton');
            rightNav.classList.add('fadeIn');
            h1.classList.add('fadeIn');
            leftContainer.classList.add('slideInRight');
            rightContainer.classList.add('slideInLeft');
            animationContainer.classList.add('fadeIn');
        };

        function removeAnim(){
            button.classList.remove('slideButton');
            rightNav.classList.remove('fadeIn');
            h1.classList.remove('fadeIn');
            leftContainer.classList.remove('slideInRight');
            rightContainer.classList.remove('slideInLeft');
            animationContainer.classList.remove('fadeIn');
        };

        addAnim();
        setTimeout(removeAnim, 2000);
    }

});
