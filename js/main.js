$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    ($("#header").toggleClass("open"));
  });

  $("#mask").on("click", function () {
    $("#header").toggleClass("open");
  });
  
  $("#navi a").on("click", function () {
    $("#header").toggleClass("open");
  });


});

/*=================================================
  PICK UP スライダー
  ===================================================*/

  $(".slick-area").slick({
    arrows: false,

    centerMode: true,
    // centerMode: true：現在のスライドを中央に配置します。
    centerPadding: "100px",
    // centerPadding: "100px"：中央に配置されたスライドの左右の余白を指定します。
    slidesToShow: 3,
    // slidesToShow: 3：表示するスライドの数を指定します（1度に表示されるスライドの数）。
    autoplay: true,
    // autoplay: true：自動再生を有効にします。
    autoplaySpeed: 3000,
    // autoplaySpeed: 3000：自動再生の速度を指定します（ミリ秒単位）。
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // ブレークポイント（デバイスの幅が768ピクセル以下の場合）では、
          centerPadding: "50px",
          slidesToShow: 1,
          // centerPaddingとslidesToShowの値が変更され、中央余白が"50px"に、表示されるスライドの数が1になります。
        },
      },
    ],
  });