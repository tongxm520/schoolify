$(document).ready(function() {
  /*CKEDITOR.instances['courseEditor'].on('change', function(e) {
    if(e.editor.checkDirty()) {
      $("#course_description").val(CKEDITOR.instances.courseEditor.getData());
    }
  });*/
  
$("#create-course").bootstrapValidator({
	// This option will not ignore invisible fields which belong to inactive panels
	excluded: [':disabled'],
	feedbackIcons: {
		valid: 'glyphicon glyphicon-ok',
		invalid: 'glyphicon glyphicon-remove',
		validating: 'glyphicon glyphicon-refresh'
	},
	fields: {
		"course[title]":{
			validators:{
				regexp:{
					regexp: /^[\u4e00-\u9fa5]{3,16}$|^[a-zA-Z0-9_']+( [a-zA-Z0-9_']+)*$/,
					message: "必须由个字母、数字、下划线、空格、单引号或3到16个汉字组成"
				},
				notEmpty: {
					message: '请填写课程名,课程名不能为空'
				},
				stringLength: {
					max: 50,
					message: '课程名必须少于50个字符'
				}
			}
		},
		"course[subtitle]":{
			validators:{
				regexp:{
					regexp: /^[\u4e00-\u9fa5]{3,10}$|^[a-zA-Z0-9_']+( [a-zA-Z0-9_']+)*$/,
					message: "必须由个字母、数字、下划线、空格、单引号或3到10个汉字组成"
				},
				notEmpty: {
					message: '请填写简称,简称不能为空'
				},
				stringLength: {
					max: 20,
					message: '简称必须少于20个字符'
				}
			}
		},
		"course[category_id]":{
			validators:{					
				notEmpty: {
					message: '请选择类别，类别不能为空'
				}
			}
		}/*,
		"course[description]":{
			validators:{					
				notEmpty: {
					message: '请填写课程介绍，课程介绍不能为空'
				},
				stringLength: {
					max: 10000,
					message: '课程介绍必须少于10000个字符'
				}
			}
		}*/
	}
}).on("success.form.bv",function(e){
	// Custom  validations here
	// Prevent form submission
	e.preventDefault();
	var $form        = $(e.target),
			validator    = $form.data('bootstrapValidator'),
			submitButton = validator.getSubmitButton();
	$("#submit-course").attr("disabled",false);
  $("#course_description").val(CKEDITOR.instances.courseEditor.getData());

	if($("#course_course_logo").val()===""){
    $("#image-error").html("请上传图片,图片不能为空");
		$("#image-error").show();
	}else if($("#course_description").val()===""){
    $("#desc-error").html("请填写课程介绍，课程介绍不能为空");
    $("#desc-error").show();
  }else {
		validator.defaultSubmit();
	}   
}).on("error.form.bv",function(e){
	$("#submit-course").attr("disabled",false);
});

});

//document.forms["form-name"].submit();
/*
$(document).ready(function() {
  $('#profileForm').bootstrapValidator({
    excluded: [':disabled'],
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      fullName: {
        validators: {
          notEmpty: {
            message: 'The full name is required and cannot be empty'
          }
        }
      },
      bio: {
        validators: {
          notEmpty: {
            message: 'The bio is required and cannot be empty'
          },
          callback: {
            message: 'The bio must be less than 200 characters long',
            callback: function(value, validator, $field) {
              // Get the plain text without HTML
              var div = $('<div/>').html(value).get(0),
              text = div.textContent || div.innerText;
              return text.length <= 200;
            }
          }
        }
      }
    }
  }).find('[name="bio"]').ckeditor().editor.on('change',function() {
    // To use the 'change' event, use CKEditor 4.2 or later
    // Revalidate the bio field
    $('#profileForm').bootstrapValidator('revalidateField', 'bio');
  });
});


$(function () {
$("#addUserForm").bootstrapValidator({
submitHandler: function(validator, form, submitButton) {
// 版本号0.4.5支持
// 版本号v0.5.2-dev不再支持submitHandler配置
}
}).on("success.form.bv",function(e){
// 版本号0.4.5不支持
// 版本号v0.5.2-dev支持
});

From v0.5.0, we remove the submitHandler option. In v0.5.0, use the success.form.bv event instead.

In v0.4.5 and earlier versions:

$(form).bootstrapValidator({
    submitHandler: function(form, validator, submitButton) {
        ...
    }
});

In v0.5.0:

$(form)
    .bootstrapValidator({
        // Removing submitHandler option
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();
        var $form        = $(e.target),
            validator    = $form.data('bootstrapValidator'),
            submitButton = validator.getSubmitButton();
        // Do whatever you want here ...
    });

$("#submit-course").on("click",function(e){
  e.preventDefault();
});

*/




