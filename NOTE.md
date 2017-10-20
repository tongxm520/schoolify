##mysqld_safe --defaults-file=/home/simon/Desktop/Depot/config/my.cnf --user=mysql &

##mysqld_safe --defaults-file=/etc/mysql/my.cnf --user=mysql &

=====================================================

ControlBar.prototype.options_ = {
  children: ['playToggle', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subtitlesButton', 'captionsButton', 'audioTrackButton', 'fullscreenToggle', 'volumeMenuButton']
};
=====================================================
<div class="second" </div>
<div class="first" ></div>
.second {
  float: right;
}

.first {
  float: right;
}

result: first is left of second
=======================================================
dpkg -i package.deb #安装包 
dpkg -r package #删除包 
dpkg -P package #删除包（包括配置文件） 
dpkg -L package #列出与该包关联的文件 
dpkg -l package #显示该包的版本 
dpkg --unpack package.deb #解开deb包的内容 
dpkg -S keyword #搜索所属的包内容 
dpkg -l #列出当前已安装的包 
dpkg -c package.deb #列出deb包的内容 
dpkg --configure package #配置包

=======================================================
CDN节点

复制js代码不要从firebug js response中复制，打开链接再复制

chapter has many sections
章有许多节
section has many paragraphs

==========an ajax triggers two actions=============================================
function action1()
{
// handle some stuff
action2();
}

function action2()
{// handle some more stuff}

if ($_POST['someButton'])
{action1();}

As ScallioXTX said, you can combine these two things server-side. Call one PHP script and let it do its thing and then forward to the other one. Of course, only the last one can produce any visible output.
=======================================================
rails g model Course title:string subtitle:string category_id:integer user_id:integer
rails g model Chapter title:string course_id:integer position:integer
rails g model Section title:string chapter_id:integer position:integer course_id:integer
rails g model Paragraph title:string section_id:integer chapter_id:integer course_id:integer bookmark_id:integer video_only:boolean content:text content_type:string position:integer
rails g model Bookmark course_id:integer paragraph_id:integer user_id:integer

rails g model User name:string
rails g model Category name:string course_count:integer

rails g controller courses
rails g controller admin/courses
rails g controller platform/courses
rails g controller api/courses

rails runner script/load_course.rb


rake routes
ActiveRecord::Base.log.info()
=======================================================
Video.js Auto loading subtitles/captions

So SRT files happened to work with versions of VideoJS up to 4.11, even though they weren't officially supported, but SRTs no longer work in 4.12 (because of the use of vtt.js, which greatly improves support for WebVTT files). This isn't specifically documented.

<video id="dotsub_example" class="video-js vjs-default-skin" width="640" height="264"  poster="http://video-js.zencoder.com/oceans-clip.png" controls preload="auto" data-setup='[]'>
   <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
   <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm; codecs="vp8, vorbis"' />
   <source src="http://video-js.zencoder.com/oceans-clip.ogg" type='video/ogg; codecs="theora, vorbis"' />
   <track kind='captions' src='https://dotsub.com/media/5d5f008c-b5d5-466f-bb83-2b3cfa997992/c/chi_hans/vtt' srclang='zh' label='Chinese' default />
   <track kind='captions' src='https://dotsub.com/media/5d5f008c-b5d5-466f-bb83-2b3cfa997992/c/eng/vtt' srclang='en' label='English' />
   <track kind='captions' src='https://dotsub.com/media/5d5f008c-b5d5-466f-bb83-2b3cfa997992/c/spa/vtt' srclang='es' label='Spanish' />
   <track kind='captions' src='https://dotsub.com/media/5d5f008c-b5d5-466f-bb83-2b3cfa997992/c/fre_ca/vtt' srclang='fr' label='French' />
</video>

There are lots of sites that will convert your SRT to a WebVTT that will work for videojs: https://atelier.u-sub.net/srt2vtt/
=======================================================
Rails 框架本身做了很多安全措施，在默认情况下，template 里的所有字符串都会被过滤：
<%= danger_string %> <!-- 安全 -->
<%= raw danger_string %> <!-- 危险 -->

就告诉模板系统关掉了安全过滤，这是非常危险的。通常谈到 raw 的时候都因为要输出 html 内容，这时候应该用 sanitize，这是一个基于白名单的过滤方法：

<%= sanitize danger_string %> <!-- 只要不开危险的标签属性名单就安全 -->

sanitize 可以在方法级别和全局级别设置白名单标签和属性，详细可以看文档 http://api.rubyonrails.org/classes/ActionView/Helpers/SanitizeHelper.html
总结：如果你不知道自己知不知道自己在干什么，别用 raw 和 html_safe，用 sanitize。
补充1：helper 里面也要避免 raw，避免在 helper 拼接 HTML 
补充2：sanitize 要放在字符串处理链的末尾
=======================================================
<script type="text/javascript">
</script>
单词不能拼写错 不然js执行不了
=======================================================
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=8,chrome=1"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />

设置<meta http-equiv="X-UA-Compatible" content="IE=edge" />时候
有些网站IE9中css文件只能加载部分
https://www.yola.com/unsupported-browser 完全加载
https://lagunita.stanford.edu/  部分加载 
https://www.stanford.edu/academics/ 部分加载




<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
=======================================================

when add a chapter, the position increase 1
adjust position the newly created chapter by move up or drag to the proper location
=======================================================
arr.each_with_index do |e,i|
  puts "#{i}=>#{e}"
end

i=0
arr.each do |e|
  puts "#{i}=>#{e}"
  i+=1
end

=======================================================
params.require(:course).permit(:category_id, :subtitle,:title,:user_id)
error=>no implicit conversion of Symbol into String
install gem 'strong_parameters'

=======================================================


rails3.2.22 only support fields_for to implement first level nested
=======================================================
//baidu=>javascript find by class
function getElementsByClass(matchClass){
  var elems=document.getElementsByTagName('*'),i;
  for(i in elems){
   if((' '+elems[i].className+' ').indexOf(' '+matchClass+' ')>-1){
     console.log(elems[i].innerHTML);
   }
  }
}
======================================================= 
jQuery(function(){}) vs (function(){})(jQuery)
======================================================= 
$("select#test").change({msg:"ok"},function(event){
  myHandler(event.data.msg);
});
======================================================= 
<div></div>
div should appear with pairs
one more or one less will cause js error
======================================================= 
rails3 json jbuilder
======================================================= 
SecureRandom.hex(16)
======================================================= 
class Person < ActiveRecord::Base
  has_one :address
  accepts_nested_attributes_for :address
end

class Address < ActiveRecord::Base
  belongs_to :person
end

def new
  @person = Person.new
  @person.build_address
end

def person_params
  params.require(:person).permit(:name, :age, :gender, address_attributes: [:id, :street, :zip_code])
end
======================================================= 
after add bootstrap.min.css,the whole page style will be influenced
different css file influence each other

/*
.nav-utilities, .xmodule_display.xmodule_CourseModule .sequence-nav-button, .xmodule_display.xmodule_VideoModule .video .video-pre-roll, .xmodule_display.xmodule_VideoModule .a11y-menu-container .a11y-menu-list, .xmodule_display.xmodule_SequenceModule .sequence-nav-button, .modal-backdrop {
    z-index: 1000;
}

bootstrap login-modal will lose focus when uncomment
*/

bootstrap reserved word=>
dropdown
dropdown-menu

======================================================= 
rails Please fill out this field

<%= text_field_tag :street, nil, :required => true %>
When you provide options to the helper, you have to pass the value for value parameter.

<%= f.text_field :street, :required => true %>
<%=form.text_field :email, :required => true, :pattern => '[^@]+@[^@]+\.[a-zA-Z]{2,6}' %>
<%= f.email_field :email, id: 'user_email', type:'email', required: true, placeholder: "Email" %>  
<%= f.text_field
    id: "yourID",
    class: "yourCLass",
    placeholder: "Your message",
    maxlength: 14,
    required: true
%>

memory exhausted

<%=f.text_field :title,:required=>true%>
<input type="text" size="30" required="required" name="course[title]" id="course_title">

I checked your screenshot, and that error message you see is in fact part of the new HTML5 protocol when you use the required attribute. The text you are seeing is in fact part of your browser, and will display different message based on the language of the users browser ... It is not anything in Foundation or the html.

You can in fact change it by using a new function input.setCustomValidity(msg), but its a bit tedious and not native to Foundation in any way:

http://stackoverflow.com/questions/5272433/html5-form-required-attribute-set-custom-validation-message
http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#dom-cva-setcustomvalidity

As far as I can see though, Foundation Abide already locks into the new html5 API with the required attribute, and will prevent it from displaying if you have added required Abide inputs correctly ... Perhaps we can look at your code? Are you adding the <div> wrappers and <small> error elements as you should be?

$(document).ready(function() {
var msg="";
var elements = document.getElementsByTagName("INPUT");
for (var i = 0; i < elements.length; i++) {
    elements[i].oninvalid = function(e) {
        e.target.setCustomValidity("");

        switch(e.target.id){
            case "password" :
            msg="Bad password";
            case "username" :
            msg="Username cannot be blank";
        }

        if (!e.target.validity.valid) {
            e.target.setCustomValidity(msg);
        }
    };
    elements[i].oninput = function(e) {
        e.target.setCustomValidity("");
    };
} })

bootstrap input error custom

======================================================= 
Do the following:

grep -rnw '/path/to/somewhere/' -e 'pattern'
    -r or -R is recursive,
    -n is line number, and
    -w stands for match the whole word.
    -l (lower-case L) can be added to just give the file name of matching files.

Along with these, --exclude, --include, --exclude-dir flags could be used for efficient searching:

##cd /home/simon/Desktop/Depot
##grep -rnw --exclude-dir='log' --exclude-dir='tmp'  "./" -e "activated"
##grep -rnw --include='*.yml'  "./" -e "activated"
##grep -rnw --exclude='*.log' "./" -e "activated"

This works very well for me, to achieve almost the same purpose like yours.
For more options check man grep.
======================================================= 
http://foundation.zurb.com/forum/signin?origin=http%3A%2F%2Ffoundation.zurb.com%2Fforum%2Fposts%2F8156-where-is-located-please-fill-out-this-field
======================================================= 

1>start from the little iteration, and then expand
2>refactor first,and then add new features
3>you mustn't copy code directly from web,put down the code word by word,inpiration comes 
out while you are coding
4>try to code more than comparing solution with doing nothing
======================================================= 
$('#contact_form').bootstrapValidator
$('#registrationForm').formValidation

<script type="text/javascript" src="validation.min.js"></script>
$("#register-form").validate

js order to be loaded


rails g controller users --no-assets

======================================================= 
echo "export SENDGRID_API_KEY='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'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env

https://sendgrid.com
tungsimon
thunder520
======================================================= 

{"user"=>{"name"=>"simon", "real_name"=>"童小明", "email"=>"tong.xm520@gmail.com", "password"=>"[FILTERED]", "password_confirmation"=>"[FILTERED]"}}

curl -i -X POST -d "user[name]=jane&user[email]=tong.xm520@gmail.com&user[password]=admin123&user[password_confirmation]=admin123" http://localhost:3000/register
======================================================= 
document.getElementById("login-form")
document.getElementsByClassName("dot-pic")
document.getElementsByTagName("*")

======================================================= 
todo list:
register and login
rich text edit
upload image
add outline and homework to nav list
ajax pagination
javascript lastChild jquery last-child
share to weibo, qq zone,renren
integration to weibo login
activity feed
captcha gem



