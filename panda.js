//Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 40000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#swiper-btn-1 .swiper-button-next",
        prevEl: "#swiper-btn-1 .swiper-button-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        310: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        530: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        925: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }
});

var swiper = new Swiper(".poster-content", {
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#swiper-btn-0 .swiper-button-next",
        prevEl: "#swiper-btn-0 .swiper-button-prev",
    },
});
// watch video
function playEpisode(videoId, titleId) {
    var videos = document.querySelectorAll('.video-container video');
    videos.forEach(function (video) {
        video.pause();
        video.style.display = 'none'; // Ẩn tất cả các video trước khi hiển thị video mới
    });
    var selectedVideo = document.getElementById(videoId);
    selectedVideo.style.display = 'block'; // Hiển thị video được chọn

    var Titles = document.querySelectorAll('.video-container h1');
    Titles.forEach(function (title) {
        title.style.display = 'none'; // Ẩn tất cả các tiêu đề trước khi hiển thị tiêu đề mới
    });
    var selectedTitle = document.getElementById(titleId);
    selectedTitle.style.display = 'block'; // Hiển thị tiêu đề được chọn

}

function toggleMenu() {
    var menu = document.getElementById("menuu");
    menu.classList.toggle("show");
}

// Ẩn hiện password
var passwordInput = document.getElementById("passwordinput");
var mkInput = document.getElementById("mk");
var nlmkInput = document.getElementById("nlmk");
var showPasswordIcon = document.getElementById("showicon");
var hidePasswordIcon = document.getElementById("hideicon");

function showpassword() {
    passwordInput.type = "text";
    showPasswordIcon.style.display = "";
    hidePasswordIcon.style.display = "none";
}

function hidepassword() {
    passwordInput.type = "password";
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "";
}

function showpassword1() {
    mkInput.type = "text";
    showPasswordIcon.style.display = "";
    hidePasswordIcon.style.display = "none";
}

function hidepassword1() {
    mkInput.type = "password";
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "";
}

function showpassword2() {
    nlmkInput.type = "text";
    showPasswordIcon.style.display = "";
    hidePasswordIcon.style.display = "none";
}

function hidepassword2() {
    nlmkInput.type = "password";
    showPasswordIcon.style.display = "none";
    hidePasswordIcon.style.display = "";
}

