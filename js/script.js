const button_1 = document.querySelector(".btn_white");
const button_2 = document.querySelector(".btn_dark");
const modal = document.querySelector(".modal");
const close = modal.querySelector(".modal__close");
const tab_header = document.querySelectorAll(".tabheader__items")[0];
button_1.addEventListener("click", function () {
    modal.style.display = "block";
});
button_2.addEventListener("click", function () {
    modal.style.display = "block";
});
close.addEventListener("click", function () {
    modal.style.display = "none";
});
modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        modal.style.display = "none";
    }
});

window.addEventListener("scroll", function (e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

const item = document.querySelectorAll(".tabheader__item");
for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        console.log(!this.classList.contains("tabheader__item_active"));
        if (!this.classList.contains("tabheader__item_active")) {
            document.querySelector(".tabheader__item.tabheader__item_active").classList.remove("tabheader__item_active");
            this.classList.add("tabheader__item_active");
            document.querySelector(".tabcontent.active_img").classList.remove("active_img");
            document.querySelector("#" + this.getAttribute("data-target")).classList.add("active_img");
        }
    });
}

const next = document.querySelector(".offer__slider-next");
const current = document.querySelector("#current");
let count = 1;
next.addEventListener("click", function () {
    var active = document.querySelector(".offer__slide.active_tomato");
    active.classList.remove("active_tomato");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active_tomato");
        count++;
        console.log(count);
        current.innerText = "0" + count;
        console.log(current.innerText);

    } else {
        document.querySelector(".offer__slider-inner").children[0].classList.add("active_tomato");
        count = 1;
        current.innerText = "0" + count;
    }
});

const prev = document.querySelector(".offer__slider-prev");
prev.addEventListener("click", function () {
    var active = document.querySelector(".offer__slide.active_tomato");
    active.classList.remove("active_tomato");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active_tomato");
        count--;
        current.innerText = "0" + count;
    } else {
        var len = document.querySelector(".offer__slider-inner").children.length;
        count = 4;
        current.innerText = "0" + count;
        document.querySelector(".offer__slider-inner").children[len - 1].classList.add("active_tomato");
    }
});


const height_input = document.querySelector("#height");
const weight_input = document.querySelector("#weight");
const age_input = document.querySelector("#age");
const result = document.querySelector(".calculating__result span");
const low = document.querySelector("#low");
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const high = document.querySelector("#high");
const female = document.querySelector("#female");
const male = document.querySelector("#male");
female.addEventListener("click", function () {
    if (female.classList.contains("calculating__choose-item_active")) {
        female.classList.remove("calculating__choose-item_active");
        if (male.classList.contains("calculating__choose-item_active")) {
            male.classList.remove("calculating__choose-item_active");
        }
    } else {
        female.classList.add("calculating__choose-item_active");
        if (male.classList.contains("calculating__choose-item_active")) {
            male.classList.remove("calculating__choose-item_active");
        }
    }
});
male.addEventListener("click", function () {
    if (male.classList.contains("calculating__choose-item_active")) {
        male.classList.remove("calculating__choose-item_active");
        if (female.classList.contains("calculating__choose-item_active")) {
            female.classList.remove("calculating__choose-item_active");
        }
    } else {
        male.classList.add("calculating__choose-item_active");
        if (female.classList.contains("calculating__choose-item_active")) {
            female.classList.remove("calculating__choose-item_active");
        }
    }
});

const male_active = document.querySelectorAll(".male_active");
for (let i = 0; i < male_active.length; i++) {
    male_active[i].addEventListener("click", function () {
        if (this.classList.contains(active)) {
            var active = document.querySelector(".calculating__choose-item_active");
            active.classList.remove("calculating__choose-item_active");
            this.classList.add("calculating__choose-item_active");

        }
    });

}
const item_main = document.querySelectorAll(".calculating__choose-item-main");
for (let i = 0; i < item_main.length; i++) {
    item_main[i].addEventListener("click", function (e) {
        var active_two = document.querySelector(".active");
        active_two.classList.remove("active");
        this.classList.add("active");
        if (this.classList.contains("calculating__choose-item-main_1") && this.classList.contains("active") && female.classList.contains("calculating__choose-item_active")) {
            var kkal_woman = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) - 161;
            result.innerText = kkal_woman;
        } else if (this.classList.contains("calculating__choose-item-main_1") && this.classList.contains("active") && male.classList.contains("calculating__choose-item_active")) {
            var kkal_man = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) + 5;
            result.innerText = kkal_man;
        }
        if (this.classList.contains("calculating__choose-item-main_2") && this.classList.contains("active") && female.classList.contains("calculating__choose-item_active")) {
            var kkal_woman = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) - 150;
            result.innerText = kkal_woman;
        } else if (this.classList.contains("calculating__choose-item-main_2") && this.classList.contains("active") && male.classList.contains("calculating__choose-item_active")) {
            var kkal_man = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) + 10;
            result.innerText = kkal_man;
        }
        if (this.classList.contains("calculating__choose-item-main_3") && this.classList.contains("active") && female.classList.contains("calculating__choose-item_active")) {
            var kkal_woman = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) - 120;
            result.innerText = kkal_woman;
        } else if (this.classList.contains("calculating__choose-item-main_3") && this.classList.contains("active") && male.classList.contains("calculating__choose-item_active")) {
            var kkal_man = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) + 20;
            result.innerText = kkal_man;
        }
        if (this.classList.contains("calculating__choose-item-main_4") && this.classList.contains("active") && female.classList.contains("calculating__choose-item_active")) {
            var kkal_woman = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) - 110;
            result.innerText = kkal_woman;
        } else if (this.classList.contains("calculating__choose-item-main_4") && this.classList.contains("active") && male.classList.contains("calculating__choose-item_active")) {
            var kkal_man = 10 * parseInt(weight_input.value) + 6.25 * parseInt(height_input.value) - 5 * parseInt(age_input.value) + 30;
            result.innerText = kkal_man;
        }
        if (height_input.value.trim() == "" || weight_input.value.trim() == "" || age_input.value.trim() == "") {
            result.innerText = "-";
        }


    });

}









