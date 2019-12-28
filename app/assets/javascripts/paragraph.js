$('body').on('click', '#new_para_btn', function() {
	$(this).hide();
	$("#newParaPanel").removeClass("hidden");
});

$('body').on('click', '#cancelNewPara', function() {
  $("#para_type").prop('selectedIndex', 0)
	$('#newParaPanel').addClass("hidden");
	$('#new_para_btn').show();
});

$('#para_type').change(function() {
	var selectIndex=this.selectedIndex;
  //var selectValue=this.options[selectIndex].text;
  var selectValue=this.options[selectIndex].value;
  alert(selectValue);
	$(this).css('margin-bottom','15px');
});

function upload_video() {
  var bar = $('#bar');
  var percent = $('#percent');

  var video = $('#video').val();
  var srt = $('#srt').val();
  if (video == '' || srt == '') {
    swal("Empty file error!", "Please select video and srt file", "error");
    return false;
  }

  $('#upload-btn').attr('disabled', 'disabled');

  $('#upload').ajaxForm({
    dataType: 'json',
    async: false,

    beforeSubmit: function() {
      document.getElementById("upload-progress").style.display="block";
      var percentVal = '0%';
      bar.width(percentVal)
      percent.html(percentVal);
    },

    uploadProgress: function(event, position, total, percentComplete) {
      var percentVal = percentComplete + '%';
      bar.width(percentVal)
      percent.html(percentVal);
    },
    
	  success: function() {
      var percentVal = '100%';
      bar.width(percentVal)
      percent.html(percentVal);
    },

    complete: function(xhr) {
      if(xhr.responseText){
        document.getElementById("upload-msg").innerHTML=xhr.responseText;
      }
    }
  }); 
}

$('input[name=video]').change(function(e) {
  $('#video-name').text($('#video')[0].files[0].name);
  browserMD5File($('#video')[0].files[0], function (err, md5) {
		$('#video-md5').html(md5);
	});
});

$('input[name=srt]').change(function(e) {
  $('#srt-name').text($('#srt')[0].files[0].name);
  browserMD5File($('#srt')[0].files[0], function (err, md5) {
		$('#srt-md5').html(md5);
	});
});

/**
 * Utility method to format bytes into the most logical magnitude (KB, MB,
 * or GB).
 */
Number.prototype.formatBytes = function() {
    var units = ['B', 'KB', 'MB', 'GB', 'TB'],
        bytes = this,
        i;
 
    for (i = 0; bytes >= 1024 && i < 4; i++) {
        bytes /= 1024;
    }
 
    return bytes.toFixed(2) + units[i];
}

/*
// Detect support for Blob slicing (required for chunked uploads):
$.support.blobSlice = window.Blob && (Blob.prototype.slice ||Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

_blobSlice: $.support.blobSlice && function () {
    var slice = this.slice || this.webkitSlice || this.mozSlice;
    return slice.apply(this, arguments);
}

slice = this._blobSlice;
o.blob = slice.call(file,ub,ub + mcs,file.type);
*/
