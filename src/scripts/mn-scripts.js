$(document).ready(function(){
  // ARTICLE I
  $('.article-1 .mn-product-item').mouseover(function(){
    $('.modal-1').css('display', 'block');
    $('.mn-welcome-message').css('display', 'none');
  });
  $('.article-1').mouseleave(function(){
    $('.modal-1').css('display', 'none');
    $('.mn-welcome-message').css('display', 'block');
  });
  // ARTICLE II
  $('.article-2 .mn-product-item').mouseover(function(){
    $('.modal-2').css('display', 'block');
    $('.mn-welcome-message').css('display', 'none');
  });
  $('.article-2').mouseleave(function(){
    $('.modal-2').css('display', 'none');
    $('.mn-welcome-message').css('display', 'block');
  });
  // ARTICLE III
  $('.article-3 .mn-product-item').mouseover(function(){
    $('.modal-3').css('display', 'block');
    $('.mn-welcome-message').css('display', 'none');
  });
  $('.article-3').mouseleave(function(){
    $('.modal-3').css('display', 'none');
    $('.mn-welcome-message').css('display', 'block');
  });
  // ARTICLE IV
  $('.article-4 .mn-product-item').mouseover(function(){
    $('.modal-4').css('display', 'block');
    $('.mn-welcome-message').css('display', 'none');
  });
  $('.article-4').mouseleave(function(){
    $('.modal-4').css('display', 'none');
    $('.mn-welcome-message').css('display', 'block');
  });
  // ARTICLE V
  $('.article-5 .mn-product-item').mouseover(function(){
    $('.modal-5').css('display', 'block');
    $('.mn-welcome-message').css('display', 'none');
  });
  $('.article-5').mouseleave(function(){
    $('.modal-5').css('display', 'none');
    $('.mn-welcome-message').css('display', 'block');
  });
  // ARTICLE VI
  $('.article-6 .mn-product-item').mouseover(function(){
    $('.modal-6').css('display', 'block');
    $('.mn-welcome-message').css('display', 'none');
  });
  $('.article-6').mouseleave(function(){
    $('.modal-6').css('display', 'none');
    $('.mn-welcome-message').css('display', 'block');
  });

  // DRAW ITEM
  $('.mn-image').mouseover(function(){
    var parent = $(this).closest('article')[0].classList[4].split('-')[1];
    var modal = '.modal-' + parent;
    var folder = $(this).find('img').attr('src').split('/')[3];
    var number = $(this).find('img').attr('src').split('/')[4].split('.')[0];
    var product = '<img src="../assets/img/' + folder + '/'+ number + '_.png">';
    if($(".modal-" + parent).find('.flex')[0].children.length >= 1){
      $(".modal-" + parent).find('img').remove();
      $(".modal-" + parent).find('.flex').append(product);
    }
    else {
      $(".modal-" + parent).find('.flex').append(product);
    }
  });
});