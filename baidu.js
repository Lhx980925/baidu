$(function(){var t,l=$("#user"),u=$("#phone"),e=$("#password"),o=$("#test"),n=$("#join"),s=$("#user-test"),a=$("#phone-test"),r=$("#password-test"),c=$("#getTest"),i=59;function f(t){$(t);var n=$("#user-validate");if(""===l.val())return n.html("用户名不能为空"),!1;for(var u=0,e=0;e<l.val().length&&(/[\u4E00-\u9FA5]/.test(l.val()[e])?u+=2:u+=1,!(14<u));e++);return 14<u?(n.html("用户名不能超过7个汉字或14个字符"),!1):!/[^\u4E00-\u9FA5\w]/.test(l.val())&&/\D/.test(l.val())?(n.html(""),!0):(n.html("用户名仅支持中英文、数字和下划线,且不能为纯数字"),!1)}function h(t){$(t);var n=$("#phone-validate");return""===u.val()?(n.html("手机号码不能为空"),!1):/^1[3456789]\d{9}$/.test(u.val())?(n.html(""),!0):(n.html("手机号码格式不正确"),!1)}function v(t){$(t);var n=$("#password-validate");return""===e.val()?(n.html("密码不能为空"),!1):/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test(e.val())?(n.html(""),!0):(n.html("密码设置不符合要求"),!1)}function m(t){$(t);var n=$("#test-validate");return""===o.val()?(n.html("验证码不能为空"),!1):(n.html(""),!0)}c.click(function(){/^1[3456789]\d{9}$/.test(u.val())?t=window.setInterval(function(){c.val("正在发送 ("+i--+" s)"),c.attr("disabled","true"),-1===i&&(window.clearInterval(t),c.val("获取验证码"),c.removeAttr("disabled"),i=59)},1e3):h("#phone")}),n.click(function(){f("#user")&&h("#phone")&&v("#password")&&m("#test")}),l.focusout(function(){f("#user")}),u.focusout(function(){h("#phone")}),e.focusout(function(){v("password")}),o.focusout(function(){m("#test")}),l.focus(function(){s.html("设置后不可更改，中英文均可，最长14个英文或7个汉字")}),u.focus(function(){a.html("请输入大陆地区手机号码，手机号码不可重复注册")}),e.focus(function(){r.html("长度为8~14个字符，字母/数字以及标点符号至少包含两种，不允许有空格、中文")}),o.focus(function(){$test3.html("请输入正确的验证码")}),l.blur(function(){s.html("")}),u.blur(function(){a.html("")}),e.blur(function(){r.html("")}),o.blur(function(){$test3.html("")})});