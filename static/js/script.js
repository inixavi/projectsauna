$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 3000,
  arrows: false,
});

const backBtn = document.getElementById('back-btn');

window.addEventListener('scroll', () => {
  const scrollValue = document.scrollingElement.scrollTop;

  if (scrollValue >= 300) {
    backBtn.style.display = 'inline';
  }
  else{
    backBtn.style.display = 'none';
  }
})