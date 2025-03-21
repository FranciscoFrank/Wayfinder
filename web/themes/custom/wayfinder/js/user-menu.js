document.addEventListener("DOMContentLoaded", function () {
  function addPaddingToMyAccount() {
    document.querySelectorAll('li[aria-label="My account"]').forEach(element => {
      element.style.paddingInline = "20px";
      element.setAttribute("data-styled-by", "user-menu.js");
    });
  }

  addPaddingToMyAccount();
});
