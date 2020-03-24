$(function() {
  var $user=$('#user'),
      $phone=$('#phone'),
      $password=$('#password'),
      $test=$('#test'),
      $join=$('#join'),
      judge=false,
      $user3=$('#user-test'),
      $phone3=$('#phone-test'),
      $password3=$('#password-test'),
      $getTest=$('#getTest');
  
  var i=59,
      timer;

  $getTest.click(function(){
    if(/^1[3456789]\d{9}$/.test($phone.val())){
      timer=window.setInterval(function() {
        $getTest.val('正在发送 (' + i-- + ' s)');
        $getTest.attr('disabled','true');
        if(i === -1) {
          window.clearInterval(timer);
          $getTest.val('获取验证码');
          $getTest.removeAttr('disabled');
          i=59;
        }
      }, 1000);
    }else{
      judge=validate2('#phone');
    }
  })
  
  $join.click(function(){
    if(!validate1('#user') || !validate2('#phone') || !validate3('#password') || !validate4('#test')) return;
  })
  
  $user.focusout(function(){
    judge=validate1('#user');
  });

  $phone.focusout(function(){
    judge=validate2('#phone');
  });

  $password.focusout(function(){
    judge=validate3('password');
  });

  $test.focusout(function(){
    judge=validate4('#test');
  });
  
  $user.focus(function(){
    $user3.html('设置后不可更改，中英文均可，最长14个英文或7个汉字');
  });
  $phone.focus(function(){
    $phone3.html('请输入大陆地区手机号码，手机号码不可重复注册');
  });
  $password.focus(function(){
    $password3.html('长度为8~14个字符，字母/数字以及标点符号至少包含两种，不允许有空格、中文');
  });
  $test.focus(function(){
    $test3.html('请输入正确的验证码');
  });
  $user.blur(function(){
    $user3.html('');
  });
  $phone.blur(function(){
    $phone3.html('');
  });
  $password.blur(function(){
    $password3.html('');
  });
  $test.blur(function(){
    $test3.html('');
  })

  function validate1(field){
    var $data=$(field),
        $user2=$('#user-validate');

    if($user.val()===''){
      $user2.html('用户名不能为空');
      return false;
    }

    var len = 0;
    for (var i = 0; i < $user.val().length; i++ ) {
      if (/[\u4E00-\u9FA5]/.test($user.val()[i])) {
        len += 2;
      } else {
        len += 1;
      }
      if (len > 14) {
        break;
      }
    }
    if(len>14){
      $user2.html('用户名不能超过7个汉字或14个字符');
      return false;
    }

    if(/[^\u4E00-\u9FA5\w]/.test($user.val())){
      $user2.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
      return false;
    }
    if(!/\D/.test($user.val())){
      $user2.html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
      return false;
    }
    
    $user2.html('');
    return true;
  }

  function validate2(field){
    var $data=$(field),
        $phone2=$('#phone-validate');

    if($phone.val()===''){
      $phone2.html('手机号码不能为空');
      return false;
    }

    if(!/^1[3456789]\d{9}$/.test($phone.val())){
      $phone2.html('手机号码格式不正确');
      return false;
    }
    
    $phone2.html('');
    return true;
  }

  function validate3(field){
    var $data=$(field),
        $password2=$('#password-validate');

    if($password.val()===''){
      $password2.html('密码不能为空');
      return false;
    }

    if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($password.val())){
      $password2.html('密码设置不符合要求');
      return false;
    }

    $password2.html('');
    return true;
  }
  
  function validate4(field){
    var $data=$(field),
        $test2=$('#test-validate');

    if($test.val()===''){
      $test2.html('验证码不能为空');
      return false;
    }

    $test2.html('');
    return true;
  }
});
