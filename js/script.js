$(function(){
  // Slider Carousel
  // Author : Cristian López


 // SLIDER
  const slider = document.querySelector('.slider');
  const item   = document.querySelectorAll('.slider__item article');
  const dots   = document.querySelectorAll('.dots span');
  const dot    = document.querySelector('.dot');

  var   prevBtn = $('.slider__prev');
  var   nextBtn = $('.slider__next');

  var size    = item[0].offsetWidth;
  var length  = item.length;


  var counter = 0;


  if(counter == 0){
    prevBtn.addClass('slider__prev--hide');
  }

  $(nextBtn).click(function(e){
    counter++;
    slider.style.transition = '.5s ease-in-out';
    slider.style.transform  = 'translateX(' + (-size * counter) + 'px)';
    // console.log(counter);
    if(counter >= 1){
      prevBtn.removeClass('slider__prev--hide');
    }
    if(counter >= length -1){
      nextBtn.addClass('slider__next--hide');
    }
  });

  $(prevBtn).click(function(e){
    e.preventDefault();
    counter--;
    slider.style.transition = '.5s ease-in-out';
    slider.style.transform  = 'translateX(' + (-size * counter) + 'px)';
    // console.log(length);
    if(counter == 0){
      prevBtn.addClass('slider__prev--hide');
    }
    if(counter <= length -1){
      nextBtn.removeClass('slider__next--hide');
    }
  });


  // SMALL
  const slider__small = document.querySelector('.slider__small');
  const item__small   = document.querySelectorAll('.slider__small__item');
  const dots__small   = document.querySelectorAll('.dots span');
  const dot__small    = document.querySelector('.dot');

  var   prevBtn__small = $('.slider__small__prev');
  var   nextBtn__small = $('.slider__small__next');

  var size__small    = item__small[0].offsetWidth;
  var length__small  = item__small.length;


  var counter__small = 0;


  if(counter__small == 0){
    prevBtn__small.addClass('slider__small__prev--hide');
  }

  $(nextBtn__small).click(function(e){
    counter__small++;
    slider__small.style.transition = '.5s ease-in-out';
    slider__small.style.transform  = 'translateX(' + (-size__small * counter__small) + 'px)';
    // console.log(counter__small);
    if(counter__small >= 1){
      prevBtn__small.removeClass('slider__small__prev--hide');
    }
    if(counter__small >= length__small -1){
      nextBtn__small.addClass('slider__small__next--hide');
    }
  });

  $(prevBtn__small).click(function(e){
    e.preventDefault();
    counter__small--;
    slider__small.style.transition = '.5s ease-in-out';
    slider__small.style.transform  = 'translateX(' + (-size__small * counter__small) + 'px)';
    // console.log(length);
    if(counter__small == 0){
      prevBtn__small.addClass('slider__small__prev--hide');
    }
    if(counter__small <= length__small -1){
      nextBtn__small.removeClass('slider__small__next--hide');
    }
    // console.log(length);
  });
});
