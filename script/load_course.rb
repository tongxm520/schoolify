#rails runner script/load_course.rb

require 'nokogiri'

HTML_NAV="#{Rails.root.to_s}/stanford/navigation.html"
chapters = []
count=0
doc = Nokogiri.parse(File.read(HTML_NAV))
doc.css('nav a.button-chapter').each do |chapter|
  chapter.css('span.group-heading').each do |span|
    puts span.content.strip
    chapters << span.content.strip
  end
end

puts "------------------------------------------------------"
chapter_hash={}
doc.css('nav a.button-chapter+div.chapter-content-container').each_with_index do |section,i|
  sections=[]
  section.css('div.menu-item p:first-child').each do |div|
    puts div.content.gsub("current section","").strip
    sections << div.content.gsub("current section","").strip
  end
  chapter_hash[chapters[i]]=sections
  puts "------------------------------------------------------"
end

#puts chapter_hash.inspect

user=User.find 2
teacher_id=user.teacher.id


#search=>rails test file upload
test_image = Rails.root.to_s+"/db/fixtures/images/fish.jpg"
up_file = Rack::Test::UploadedFile.new(test_image, "image/jpeg")
course=Course.new
course.title="Mining Massive Datasets"
course.subtitle="MMDS"
course.category_id=Random.rand(10)+1
course.teacher_id=teacher_id
course.description="How are you recently?"
course.course_logo= up_file

course.save!

i=1

chapter_hash.each_pair do |k,v|
  ch=Chapter.new
  ch.title=k
  ch.course_id=course.id
  ch.position=i
  ch.save
  count+=1
  i+=1
  v.each_with_index do |e,j|
    count+=1
    Section.create(:title=>e,:chapter_id=>ch.id,:position=>j+1,:content_type=>"Course")
  end
end

puts "#record count=>#{count}"

#> "Homework".strip!   => nil
#> "Homework".strip    => "Homework"

test_image = Rails.root.to_s+"/db/fixtures/images/blue.jpg"
up_file = Rack::Test::UploadedFile.new(test_image, "image/jpeg")
course=Course.new
course.title="Mastering PostgreSQL"
course.subtitle="pg"
course.category_id=Random.rand(10)+1
course.teacher_id=teacher_id
course.description="The PostgreSQL Global Development Group announces that the first beta release of PostgreSQL 11 is now available for download."
course.course_logo= up_file

course.save!
chapter=course.chapters.create(:title=>"Getting Started")
chapter.sections.create(:title=>"Pre-Course Survey",:content_type=>"Course")
chapter.sections.create(:title=>"Navigating Your Mini-Course",:content_type=>"Course")

chapter=course.chapters.create(:title=>"SQL")
chapter.sections.create(:title=>"Basic SELECT Statement",:content_type=>"Course")
chapter.sections.create(:title=>"Table Variables and Set Operators",:content_type=>"Course")
chapter.sections.create(:title=>"Subqueries in WHERE Clause",:content_type=>"Course")
chapter.sections.create(:title=>"Final Test",:content_type=>"Question")


test_image = Rails.root.to_s+"/db/fixtures/images/five-different-colored-birds.jpeg"
up_file = Rack::Test::UploadedFile.new(test_image, "image/jpeg")
course=Course.new
course.title="计算机密码学"
course.subtitle="密码学"
course.category_id=Random.rand(10)+1
course.teacher_id=teacher_id
course.description="研究密码变化的客观规律，应用于编制密码以保守通信秘密的，称为编码学；应用于破译密码以获取通信情报的，称为破译学，总称密码学。"
course.course_logo= up_file

course.save!

test_image = Rails.root.to_s+"/db/fixtures/images/manyfish.bmp"
up_file = Rack::Test::UploadedFile.new(test_image, "image/jpeg")
course=Course.new
course.title="平面设计"
course.subtitle="PS"
course.category_id=Random.rand(10)+1
course.teacher_id=teacher_id
course.description="全方位培养动手设计能力强的平面广告设计师；具备扎实的操作全套平面设计软件的技能，熟练掌握各软件间的协调和整合运用，轻松胜任各行业的平面设计师岗位。"
course.course_logo= up_file

course.save!














