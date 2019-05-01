(function () {

    let elementForm = document.querySelector("#mainForm");
    elementForm.addEventListener("submit", function (e) {
        e.preventDefault();
        validate();
    });

    function validate() {
        let name = document.querySelector("#name"),
            nameVal = name.value,
            mail = document.querySelector("#mail"),
            mailVal = mail.value,
            message = document.querySelector("#message"),
            messageVal = message.value;
        if (nameVal.length === 0) {
            name.setAttribute("placeholder", "*This field is required");
            return false;
        }
        if (mailVal.length === 0) {
            mail.setAttribute("placeholder", "*This field is required");
            return false;
        }
        if (messageVal.length === 0) {
            message.setAttribute("placeholder", "*This field is required");
            return false;
        }
    }

    document.getElementById("mobMenu").addEventListener("click", mobileMenu);

    function mobileMenu() {
        this.classList.toggle("mobMenu--active");
        document.getElementById("menu").classList.toggle("menu--show");
    }

    window.addEventListener("scroll", bringmenu);

    function bringmenu() {
        if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            document.getElementById("header").classList.add("header--hide");
        } else {
            document.getElementById("header").classList.remove("header--hide");
        }
    }

    let btnMenu = document.querySelectorAll('.menu-item');
    for (let i = 0; i < btnMenu.length; i++) {
        mainMenuListeren(btnMenu[i]);
    }

    function mainMenuListeren(el) {
        el.addEventListener("click", function () {
            removeClass();
            this.classList.add("menu-item--active");
        });
    }

    function removeClass() {
        for (let i = 0; i < btnMenu.length; i++) {
            btnMenu[i].classList.remove("menu-item--active");
        }
    }

})();