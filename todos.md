
https://app.studiesweekly.com/online/publications/58784/units/66267/edit_test
https://app.studiesweekly.com/online/
4972
Txm7366087

rails g model Student
rails g model Teacher
rails g model Study
rails g migration add_description_to_course
rails g migration add_course_logo_to_course

rake db:drop
rake db:create
rake db:migrate
rake db:load_data
rails runner script/load_course.rb

_______________________________________________________________________
I have added ckeditor(gem "ckeditor", "3.7.3") in my rails 3.2 app and is working fine.
But the problem is I want on specific things out of the whole toolbar , I have seen this.
Here it has mentioned two types of toolbar Full and Easy,where Easy is configued as shown here.
So the question is how do I get the information of all the variables so that I use only what I need.

##unexpected errors may occur after format js 
##format_ckeditor.js
find by 'filebrowserUploadUrl' in format_ckeditor.js
=>
b.on("uploaded",
	function(a) {
		var b = a.sender.responseData;
		m.call(a.sender.editor, b.url, b.message)
})

when upload image with ckeditor
"ckCsrfToken"=>"5a4wOzGr5IAvuIABNgo24JhI6SWu4PKH3KpzwhAO"
WARNING: Can’t verify CSRF token authenticity with CKEditor image upload
rails csrftoken ckeditor
skip_before_filter  :verify_authenticity_token
#TODO: how to solve WARNING when enable verify_authenticity_token
_______________________________________________________________________

<h1>Apollo 11</h1>
<p><strong>Apollo 11</strong> was the spaceflight that landed the first humans, Americans <a href="http://en.wikipedia.org/wiki/Neil_Armstrong">Neil Armstrong</a> and <a href="http://en.wikipedia.org/wiki/Buzz_Aldrin">Buzz Aldrin</a>, on the Moon on July 20, 1969, at 20:18 UTC. Armstrong became the first to step onto the lunar surface 6 hours later on July 21 at 02:56 UTC.</p>
<p>Armstrong spent about <s>three and a half</s> two and a half hours outside the spacecraft, Aldrin slightly less; and together they collected 47.5 pounds (21.5&nbsp;kg) of lunar material for return to Earth. A third member of the mission, <a href="http://en.wikipedia.org/wiki/Michael_Collins_(astronaut)">Michael Collins</a>, piloted the <a href="http://en.wikipedia.org/wiki/Apollo_Command/Service_Module">command</a> spacecraft alone in lunar orbit until Armstrong and Aldrin returned to it for the trip back to Earth.
</p>
_______________________________________________________________________

https://github.com/minimagick/minimagick

Why?

由于RMagick会导致内存泄露，建议使用Mini_Magick，gem "mini_magick"，使用方法基本和RMagick差不多
I was using RMagick and loving it, but it was eating up huge amounts of memory. Even a simple script would use over 100MB of RAM. On my local machine this wasn't a problem, but on my hosting server the ruby apps would crash because of their 100MB memory limit.

Solution!

Using MiniMagick the ruby processes memory remains small (it spawns ImageMagick's command line program mogrify which takes up some memory as well, but is much smaller compared to RMagick). See Thinking of switching from RMagick? below.
MiniMagick gives you access to all the command line options ImageMagick has (found here).

Requirements

ImageMagick or GraphicsMagick command-line tool has to be installed. You can check if you have it installed by running

$ convert -version
Version: ImageMagick 6.8.9-7 Q16 x86_64 2014-09-11 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2014 ImageMagick Studio LLC
Features: DPC Modules
Delegates: bzlib fftw freetype jng jpeg lcms ltdl lzma png tiff xml zlib

Installation

Add the gem to your Gemfile:
gem "mini_magick"
_______________________________________________________________________
As of version 1.0, CarrierWave requires Rails 4.0 or higher and Ruby 2.0 or higher. If you're on Rails 3, you should use v0.11.0.
sudo gem install carrierwave -v 0.11.0
gem 'carrierwave','0.11.0'

生成uploader
rails generate uploader Avatar

挂载属性
文件上传后存储的是图片的路径，存储图片路径的字段挂载AvatarUploader.比如model Book有四个属性name 、author 、publish 、picture_url，在model中加上一行：
class Book < ActiveRecord::Base
    mount_uploader :picture_url, AvatarUploader
end

修改app/uploaders/avatar_uploader.rb

# encoding: utf-8
class AvatarUploader < CarrierWave::Uploader::Base

uploader:
  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

   def extension_white_list
     %w(jpg jpeg gif png)
   end
end
_______________________________________________________________________
#bootstrap treeview add button to node
https://blog.csdn.net/hotqin888/article/details/54798737
https://github.com/patternfly/patternfly-bootstrap-treeview/issues/22

Tree.prototype.template
Tree.prototype._template = {
	button: {
	add: $('<button class="add-btn btn glyphicon glyphicon-plus-sign node-hidden"></button>'),
	edit: $('<button class="btn glyphicon glyphicon-edit node-hidden"></button>'),
	remove: $('<button class="btn glyphicon glyphicon-remove-sign node-hidden"></button>')
	}
}

Tree.prototype.buildTree
Tree.prototype._renderNode = function (node, previousNode) {
	node.$el.append(this._template.button.add.clone());
	node.$el.append(this._template.button.edit.clone());
	node.$el.append(this._template.button.remove.clone());
	node.$el.mouseenter(function(){
		node.$el.children('button.btn').removeClass('node-hidden');
	}).mouseleave(function(){
		node.$el.children('button.btn').addClass('node-hidden');
	});
}


Add onAddButtonClicked/onEidtButtonClicked/onRemoveButtonClicked evnets 
to _default.settings{} and other place , just like onNodeSelected etc.

// Optionally trigger event, partially checked is technically unchecked
this._triggerEvent('nodeSelected', node, options);
this._triggerEvent('addButtonClicked', node, _default.options);

this.$element.trigger('addButtonClicked', $.extend(true, {}, node));

$('#tree').treeview({
data:[],
onAddButtonClicked:function(event, node){...},
//...
});

<button class="add-btn btn glyphicon glyphicon-plus-sign node-hidden"></button>

sudo pip install XStatic-Patternfly-Bootstrap-Treeview==2.1.3.2
sudo find / -name "bootstrap-treeview.js" -type f
/usr/local/lib/python3.4/dist-packages/xstatic/pkg/patternfly_bootstrap_treeview/data/js/bootstrap-treeview.js

1.2.0
Tree.prototype.getSiblings
Tree.prototype.forEachIdentifier
Tree.prototype.addNode


<form name="create-section" method="post" id="" class="new_chapter" action="/admin/chapters/222/sections" accept-charset="UTF-8">
  <input type="text" size="30" name="section[title]" id="">
  <button class="cancel btn">Cancel</button>	
  <button class="save btn">Save</button>
</form>

http://192.168.1.107:3000/admin/courses/2/chapters/new


#Show loading image while Page is loading using jQuery 

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
login/register captcha gem
https://www.elastic.co/products/elasticsearch
apply to be a teacher
teacher privilege









