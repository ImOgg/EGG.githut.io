$('.btn-menu').click(function () {
    $('.mobilemenu').toggleClass('active');
    $(this).toggleClass('active');
    // alert(11111);
})


function GoForm() { //這裡要對應到自己的 javascript 名稱
    //宣告欄位
    var field1 = $("[name='name']").val();
    var field2 = $("[name='tel']").val();
    var field3 = $("[name='email']").val();
    var field4 = $("[name='text']").val();
    $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdcyelVxuhgMA3oQjn1EMT-Y2AexpSgVE35lKgChkWBggauVA/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
        data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
            "entry.1603205191":field1,
            "entry.1310954240":field2,
            "entry.1537638940":field3,
            "entry.1996598147":field4,
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                alert("已送出!"); //完成送出表單的警告視窗
            },
            200: function () {
                alert("已送出!"); //完成送出表單的警告視窗
            }
        }
    });
}


$(function () {
    $(".list").click(function (event) {
      event.preventDefault();
      var target = $(this).attr('href');
      //var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $('html,body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
    $(".newstop").click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        //var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $('html,body').animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000
        );
      });
      $(".access").click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        //var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $('html,body').animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000
        );
      });
      $(".connect").click(function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        //var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $('html,body').animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000
        );
      });

    $(".top").click(function(){
      $('html,body').animate({
        scrollTop:0,
      },1000);
    });
  
    
  }
  );
  
