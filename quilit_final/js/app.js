const navigation = document.querySelector("nav");
const navigationHeight = navigation.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding", navigationHeight + "px"
)
