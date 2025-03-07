document.addEventListener("DOMContentLoaded", function () {
  function checkAndFadeOut(selector) {
    const checkInterval = setInterval(() => {
      const element = document.querySelector(selector);
      if (element) {
        setTimeout(() => {
          element.style.transition = "opacity 1s";
          element.style.opacity = "0";
          setTimeout(() => element.remove(), 1000);
        }, 5000);
        clearInterval(checkInterval);
      }
    }, 100);
  }

  checkAndFadeOut(".messages__wrapper");
  checkAndFadeOut(".alert-warning");

  function addPaddingToMyAccount() {
    document.querySelectorAll('li[aria-label="My account"]').forEach(element => {
      element.style.paddingInline = "20px";
      element.setAttribute("data-styled-by", "user-menu.js");
    });
  }

  addPaddingToMyAccount();
});
