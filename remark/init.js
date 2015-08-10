var slideshow = remark.create({
  highlightStyle: 'solarized_light',
  highlightLanguage: 'javascript',
  navigation: {
    scroll: false
  }
});

Array.prototype.forEach.call(document.querySelectorAll(".remark-slide-content h1"), function(el) {
  el.innerHTML = "<span>"+el.innerHTML+"</span>";
});