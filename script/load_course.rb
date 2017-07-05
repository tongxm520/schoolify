require 'nokogiri'

HTML_NAV="#{Rails.root.to_s}/stanford/navigation.html"
chapters = []

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

user=User.create(:name=>"simon")
category=Category.create(:name=>"ComputerScience")
user_id=user.id
category_id=category.id

course=Course.create!(:title=>"Mining Massive Datasets",:subtitle=>"MMDS",:category_id=>category_id,:user_id=>user_id)

i=1
chapter_hash.each_pair do |k,v|
  ch=Chapter.new
  ch.title=k
  ch.course_id=course.id
  ch.position=i
  ch.save
  i+=1
  v.each_with_index do |e,j|
    if e.split(/\s/)[0].strip == "Outline"
      Section.create(:title=>e,:chapter_id=>ch.id,:position=>j+1,:course_id=>course.id,:type=>"Outline")
    elsif e.split(/\s/)[0].strip == "Homework:"
      Section.create(:title=>e,:chapter_id=>ch.id,:position=>j+1,:course_id=>course.id,:type=>"Homework")
    else
      Section.create(:title=>e,:chapter_id=>ch.id,:position=>j+1,:course_id=>course.id,:type=>"Lecture")
    end
  end
end

#> "Homework".strip!   => nil
#> "Homework".strip    => "Homework"















