navbarButton.addEventListener('click', () => {
    if (navbarMenu.style.maxHeight) {
      navbarMenu.style.maxHeight = null;
    } else {
      navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
    }
  });
  