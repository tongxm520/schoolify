//if($(this).hasClass('bootstrapFormClass')){}

$(document).ready(function() {
  $("#register-form").bootstrapValidator({
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			"user[name]":{
				validators:{
					regexp:{
					  regexp: /^[a-zA-Z0-9_]{3,20}$/,
					  message: "必须由3-20个字母、数字或下划线组成"
					},
			    notEmpty: {
			      message: '请填写用户名,用户名不能为空'
			    }
				}
			},
			"user[real_name]":{
				validators:{
					regexp:{
					  regexp: /^[\u4e00-\u9fa5]{2,4}$|^[a-zA-Z0-9_]{3,25}$/,
					  message: "必须由3-25个字母、数字、下划线或2到4个汉字组成"
					},
			    notEmpty: {
			      message: '请填写真实姓名,真实姓名不能为空'
			    }
				}
			},
			"user[email]":{
				validators:{
					regexp:{
					  regexp: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,
					  message: "请填写有效电子邮箱"
					},
          /*emailAddress: {
		        message: 'The email address is not valid'
		      },*/
			    notEmpty: {
			      message: '请填写邮箱,邮箱不能为空'
			    },
          remote: {
            message: "邮件地址已被占用，请换一个",
            url: "/identical_email",
            data: {
              type: "user[email]"
            },
            type: 'POST',
	          delay: 1000
          }
				}
			},
			"user[password]":{
				validators:{
					regexp:{
					  regexp: /^[a-zA-Z0-9~@#%&_\.\-\^\$\*\!\+\=]{6,16}$/,
					  message: "必须由6-16个字母、数字或特殊字符组成"
					},
			    notEmpty: {
			      message: '请填写密码,密码不能为空'
			    },
			    identical:{
			      field: "user[password_confirmation]",
			      message: "密码和确认密码不一致"
			    }
				}
			},
			"user[password_confirmation]":{
				validators:{
					regexp:{
					  regexp: /^[a-zA-Z0-9~@#%&_\.\-\^\$\*\!\+\=]{6,16}$/,
					  message: "必须由6-16个字母、数字或特殊字符组成"
					},
			    notEmpty: {
			      message: '请填写确认密码,确认密码不能为空'
			    },
			    identical:{
			      field: "user[password]",
			      message: "密码和确认密码不一致"
			    }
				}
			}
		},
    submitHandler: function(validator, form, submitButton) {
      //alert("Your alert come here");
      //validator.defaultSubmit();
    }
	});

  $("#login-form").bootstrapValidator({
		feedbackIcons: {
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'
		},
		fields: {
			"email":{
				validators:{
          emailAddress: {
		        message: '请填写有效电子邮箱'
		      },
			    notEmpty: {
			      message: '请填写邮箱,邮箱不能为空'
			    }          
				}
			},
			"password":{
				validators:{
					regexp:{
					  regexp: /^[a-zA-Z0-9~@#%&_\.\-\^\$\*\!\+\=]{6,16}$/,
					  message: "必须由6-16个字母、数字或特殊字符组成"
					},
			    notEmpty: {
			      message: '请填写密码,密码不能为空'
			    }
				}
			}
		},
    submitHandler: function(validator, form, submitButton) {
    }
	});

});


/* #####################################################################
   #
   #   Project       : Modal Login with jQuery Effects
   #   Author        : Rodrigo Amarante (rodrigockamarante)
   #   Version       : 1.0
   #   Created       : 07/29/2015
   #   Last Change   : 08/04/2015
   #
   ##################################################################### */

$(function() {
  var $formLogin = $('#login-form');
  var $formLost = $('#lost-form');
  var $formRegister = $('#register-form');
  var $divForms = $('#div-forms');
  var $modalAnimateTime = 300;
  var $msgAnimateTime = 150;
  var $msgShowTime = 10000;

  $("form").submit(function() {
    switch(this.id) {
      case "login-form":
        if(!$("#login-form").data('bootstrapValidator').isValid()) {
          msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", "Login error");
        } else {
          $("#login-submit").attr("disabled",true).html('<img src="/assets/loading.gif" /> &nbsp; SigningIn...');
          var data = $("#login-form").serialize();
          $.ajax({
            type: 'post',
            url: '/login',
            data: data,
            dataType: 'json',
            success: function(result,status){
              if(status==="success"){
                if(result.data==="ok"){
                  window.location.href = result.path;
                }else if(result.data==="inactivate"){
                  window.location.href="reactivate?email="+result.email;
                }else if(result.data==="error"){
                  $("#login-submit").attr("disabled",false).html('Login');
                  msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), "error", "glyphicon-remove", result.info);
                }
              }
            }
          });
        }
        return false;
        break;
      case "lost-form":
        var $ls_email = $('#lost_email').val();
        if ($ls_email == "ERROR") {
          msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "error", "glyphicon-remove", "Send error");
        } else {
          msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), "success", "glyphicon-ok", "Send OK");
        }
        return false;
        break;
      case "register-form":
        if(!$("#register-form").data('bootstrapValidator').isValid()) {
          msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "error", "glyphicon-remove", "Register error");
        } else {
          msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), "success", "glyphicon-ok", "Register OK");
          $("#register-submit").attr("disabled",true).html('<img src="/assets/loading.gif" /> &nbsp; SigningUp...');
          var data = $("#register-form").serialize();
          $.ajax({
            type: 'post',
            url: '/register',
            data: data,
            dataType: 'json',
            success: function(result,status){
              if(status==="success"){
                if(result.data==="ok"){
                  //$(".modal-backdrop.fade.in").remove();
                  //$("#login-modal").removeClass("in").attr("aria-hidden","true").hide();
                  window.location.href = "confirm"+"?email="+result.email;
                }
              }
            }
          });
        }
        return false;
        break;
      default:
        return false;
    }
    return false;
  });

  $('#login_register_btn').click(function() {
    modalAnimate($formLogin, $formRegister)
  });
  $('#register_login_btn').click(function() {
    modalAnimate($formRegister, $formLogin);
  });
  $('#login_lost_btn').click(function() {
    modalAnimate($formLogin, $formLost);
  });
  $('#lost_login_btn').click(function() {
    modalAnimate($formLost, $formLogin);
  });
  $('#lost_register_btn').click(function() {
    modalAnimate($formLost, $formRegister);
  });
  $('#register_lost_btn').click(function() {
    modalAnimate($formRegister, $formLost);
  });

  function modalAnimate($oldForm, $newForm) {
    var $oldH = $oldForm.height();
    var $newH = $newForm.height();
    //$divForms.css("height", $oldH);
    $oldForm.fadeToggle($modalAnimateTime, function() {
      $divForms.animate({
        //height: $newH
      }, $modalAnimateTime, function() {
        $newForm.fadeToggle($modalAnimateTime);
      });
    });
  }

  function msgFade($msgId, $msgText) {
    $msgId.fadeOut($msgAnimateTime, function() {
      $(this).text($msgText).fadeIn($msgAnimateTime);
    });
  }

  function msgChange($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
    var $msgOld = $divTag.text();
    msgFade($textTag, $msgText);
    $divTag.addClass($divClass);
    $iconTag.removeClass("glyphicon-chevron-right");
    $iconTag.addClass($iconClass + " " + $divClass);
    setTimeout(function() {
      msgFade($textTag, $msgOld);
      $divTag.removeClass($divClass);
      $iconTag.addClass("glyphicon-chevron-right");
      $iconTag.removeClass($iconClass + " " + $divClass);
    }, $msgShowTime);
  }

});



