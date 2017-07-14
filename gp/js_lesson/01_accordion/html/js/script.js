$(function() {

  // +ボタン切り替え
  $('.acdn_list_item').on('click', function() {
    $('.btn_icon', this).toggleClass('close');
  });

  //最初は.js-acdn_contentを非表示
  $('.js-acdn_content').hide();

  // .js-acdn_btnにclickイベントを設定
  $('.js-acdn_btn').on('click', function(){

    //clickした直後の.acdn_contentを開閉
    $('+.js-acdn_content', this).slideToggle();
  });

});
