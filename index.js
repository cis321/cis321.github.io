var openGalery = function (items) {
  var pswpElement = document.querySelectorAll('.pswp')[0];
  var options = {
    // history & focus options are disabled on CodePen
    history: false,
    focus: false,

    showAnimationDuration: 0,
    hideAnimationDuration: 0,

  };

  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}

var openPhotoSwipeGraphicDesign = function () {
  var items = [{
    src: 'wp-content/jpv/Graphic Desing.jpg',
    w: 964,
    h: 1024,
  }, ];

  openGalery(items);
};

var openPhotoSwipeConcaptArt = function () {
  var items = [{
      src: 'wp-content/jpv/Madre1.png',
      w: 964,
      h: 1024,
    },
    {
      src: 'wp-content/jpv/Madre2.png',
      w: 1024,
      h: 683,
    },
  ];

  openGalery(items);
};

var openPhotoSwipeSketches = function () {
  var items = [{
    src: 'wp-content/jpv/Sketch.jpg',
    w: 964,
    h: 1024,
  }, ];

  openGalery(items);
};

var openPhotoSwipeMurals = function () {
  var items = [{
    src: 'wp-content/jpv/Sketch.jpg',
    w: 964,
    h: 1024,
  }, ];

  openGalery(items);
};

var openPhotoSwipeAnimation = function () {
  var items = [{
    src: 'wp-content/jpv/Sketch.jpg',
    w: 964,
    h: 1024,
  }, ];

  openGalery(items);
};

document.getElementById('graphic-desing').onclick = openPhotoSwipeGraphicDesign;
document.getElementById('concept-art').onclick = openPhotoSwipeConcaptArt;
document.getElementById('sketches').onclick = openPhotoSwipeSketches;
document.getElementById('murals').onclick = openPhotoSwipeMurals;
document.getElementById('animation').onclick = openPhotoSwipeAnimation;
