/* ---------------- G A L L E R Y   S C R I P T S ---------------- */

var images = document.querySelectorAll(".productImage");
var galleryImages = document.querySelectorAll(".galleryItem");

var imageIndex = 0;

//Image to Display
function displayImage(n) {
  imageIndex = n;
  images.forEach((image) => {
    image.removeAttribute("id");
    image.classList.add("imageHidden");
  });
  images[n].classList.remove("imageHidden");
  images[n].id = "productImageActive";

  galleryImages.forEach((galleryImage) => {
    galleryImages.forEach((galleryImage) => {
      galleryImage.children[0].style.backgroundColor = "";
      galleryImage.children[0].style.border = "none";
    });
    galleryImages[imageIndex].children[0].style.backgroundColor =
      "rgba(255, 255, 255, 0.75)";
    galleryImages[imageIndex].children[0].style.border =
      "solid hsl(26, 74%, 58%)";
  });
}

//Image Gallery Control
galleryImages.forEach((galleryImage) => {
  galleryImage.addEventListener("click", (displayGalleryImage) => {
    displayImage(Array.from(galleryImages).indexOf(galleryImage));
  });
});

/* ---------------- L I G H T B O X   S C R I P T S ---------------- */

if (window.innerWidth > 991) {
  /* Lightbox Display Control */

  var imageDisplayed = document.querySelector("#productImageActive");
  var lightbox = document.querySelector("#lightbox");
  var closeButton = document.querySelector("#iconClose");

  // Open Lightbox(using event delegation)
  document.addEventListener("click", (openLightbox) => {
    if (openLightbox.target && openLightbox.target.id == "productImageActive") {
      lightbox.style.display = "flex";
    }
  });

  // Hide Lightbox
  closeButton.addEventListener("click", hideLightbox);

  function hideLightbox() {
    lightbox.style.display = "none";
  }

  document.addEventListener("keyup", hideLightboxEsc);

  function hideLightboxEsc(event) {
    if (event.key == "Escape") {
      hideLightbox();
    }
  }

  var lightboxImages = document.querySelectorAll(".lightboxImage");
  var lightboxGalleryImages = document.querySelectorAll(
    ".galleryItemContainer"
  );

  document.addEventListener("click", (switchLightboxImage) => {
    if (
      switchLightboxImage.target &&
      switchLightboxImage.target.id == "productImageActive"
    ) {
      displayLightboxImage(imageIndex);
    }
  });

  function displayLightboxImage(n) {
    n = imageIndex;
    lightboxImages.forEach((lightboxImage) => {
      lightboxImage.classList.remove("lightboxActive");
      lightboxImage.classList.add("lightboxHidden");
    });
    lightboxImages[n].classList.add("lightboxActive");
    lightboxImages[n].classList.remove("lightboxHidden");

    lightboxGalleryImages.forEach((lightboxGalleryImage) => {
      lightboxGalleryImages.forEach((lightboxGalleryImage) => {
        lightboxGalleryImage.children[0].style.backgroundColor = "";
        lightboxGalleryImage.children[0].style.border = "none";
      });
      lightboxGalleryImages[imageIndex].children[0].style.backgroundColor =
        "rgba(255, 255, 255, 0.75)";
      lightboxGalleryImages[imageIndex].children[0].style.border =
        "solid hsl(26, 74%, 58%)";
    });
  }

  //Image Gallery Control

  lightboxGalleryImages.forEach((lightboxGalleryImage) => {
    lightboxGalleryImage.addEventListener(
      "click",
      (displayLightboxGalleryImage) => {
        displayLightboxImage(
          Array.from(lightboxGalleryImages).indexOf(lightboxGalleryImage)
        );
      }
    );
  });

  // Prev-Next Arrow Control

  var arrowPrev = document.querySelector("#buttonPrev");
  var arrowNext = document.querySelector("#buttonNext");

  arrowPrev.addEventListener("click", prevImage);

  function prevImage() {
    if (imageIndex == 0) {
      imageIndex = lightboxImages.length - 1;
    } else {
      imageIndex -= 1;
    }
    displayLightboxImage(imageIndex);
  }

  arrowNext.addEventListener("click", nextImage);

  function nextImage() {
    if (imageIndex == lightboxImages.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
    displayLightboxImage(imageIndex);
  }
}

/* ---------------- C A R T   S C R I P T S ---------------- */

// Cart Counter Control

var cartCountContainer = document.querySelector("#counterValue");
var cartCount = Number(document.querySelector("#counterValue").innerText);

var addToCart = document.querySelector("#buttonAddToCart");
var incrementItemButton = document.querySelector("#buttonPlus");

addToCart.addEventListener("click", incrementCartCounter);
incrementItemButton.addEventListener("click", incrementCartCounter);

function incrementCartCounter() {
  cartCount++;
  cartCountContainer.innerText = cartCount;
  cartCounter.innerText = cartCount;
  cartCounter.style.visibility = "visible";
  emptyMessage.style.display = "none";
  cartContent.style.visibility = "visible";
  quantityInCart.innerText = cartCount;
  totalInCart.innerText = price * Number(quantityInCart.textContent);
}

var decrementItemButton = document.querySelector("#buttonMinus");

decrementItemButton.addEventListener("click", decrementCartCounter);

function decrementCartCounter() {
  if (cartCount >= 1) {
    cartCount--;
    cartCountContainer.innerText = cartCount;
    cartCounter.innerText = cartCount;
    if (cartCount == 0) {
      cartCounter.style.visibility = "hidden";
      cartContent.style.visibility = "hidden";
      emptyMessage.style.display = "block";
      quantityInCart.innerText = cartCount;
      totalInCart.innerText = price * Number(quantityInCart.textContent);
    }
  }
}

// In Cart

var cartIcon = document.querySelector("#iconHeaderCart");
var cart = document.querySelector("#cart");
var cartCounter = document.querySelector("#cartContentCounter");
var cartContent = document.querySelector("#cartContentContainer");
var emptyMessage = document.querySelector("#cartIsEmpty");
var quantityInCart = document.querySelector(".inCartQuantity");
var totalInCart = document.querySelector(".inCartTotal");
var price = Number(document.querySelector(".inCartPrice").textContent);
var clearButton = document.querySelector("#iconDelete");

cartIcon.addEventListener("click", cartEvent);

function cartEvent() {
  if (cart.style.display == "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}

clearButton.addEventListener("click", clearCart);

function clearCart() {
  cartCounter.style.visibility = "hidden";
  cartCounter = 0;
  cartCountContainer.innerText = cartCount;
  cartCounter.innerText = cartCount;
  cartContent.style.visibility = "hidden";
  emptyMessage.style.display = "block";
}

/* ---------------- N A V I G A T I O N   B A R   S C R I P T S ---------------- */

// User Avatar
var userAvatar = document.querySelector("#imageAvatar");

userAvatar.addEventListener("click", (avatarOnClickEvent) => {
  userAvatar.style.borderColor = "hsl(26, 100%, 55%)";
});

window.addEventListener("mouseup", (hideAvatarBorders) => {
  if (!userAvatar.contains(hideAvatarBorders.target)) {
    userAvatar.style.borderColor = "transparent";
  }
});

/* ---------------- M O B I L E   S C R I P T S ---------------- */

if (window.innerWidth <= 991) {
  // Navigation Bar

  var navigationBars = document.querySelector("#headerListBars");
  var navigation = document.querySelector("#headerList");
  var navigationBackground = document.querySelector("#headerContainerMobile");
  var closeNavigation = document.querySelector("#buttonCloseNavigation");

  navigationBars.addEventListener("click", displayNavigation);

  function displayNavigation() {
    navigation.style.display = "block";
    navigationBackground.style.display = "block";
  }

  closeNavigation.addEventListener("click", hideNavigation);

  function hideNavigation() {
    navigation.style.display = "none";
    navigationBackground.style.display = "none";
  }

  //Gallery Arrows Control

  var mobilePrevArrow = document.querySelector("#buttonPrevMobile");
  var mobileNextArrow = document.querySelector("#buttonNextMobile");

  mobilePrevArrow.addEventListener("click", prevImageMobile);

  function prevImageMobile() {
    if (imageIndex == 0) {
      imageIndex = galleryImages.length - 1;
    } else {
      imageIndex -= 1;
    }
    displayImage(imageIndex);
  }

  mobileNextArrow.addEventListener("click", nextImageMobile);

  function nextImageMobile() {
    if (imageIndex == galleryImages.length - 1) {
      imageIndex = 0;
    } else {
      imageIndex += 1;
    }
    displayImage(imageIndex);
  }
}
