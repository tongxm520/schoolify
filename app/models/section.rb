class Section < ActiveRecord::Base
  attr_accessible :chapter_id, :title,:position
  belongs_to :chapter
  has_many :paragraphs,:dependent=>:destroy

  def extract_captions
    path="#{Rails.root.to_s}/public/uploads/Distributed+File+Systems+(15_50).vtt"

    arr=Array.new
    hash=Hash.new
    j=1
    File.open(path,"r").readlines.each_with_index do |line,i|
      _line=line.strip
      if i>1&&_line!=""
         if j%3==1
           hash["id"]=_line
           j+=1
         elsif j%3==2
           hash["miliseconds"]= get_start_time(_line)
           j+=1
         else
           hash["text"]=_line
           arr << hash
           hash=Hash.new
           j=1
         end
      end
    end
    arr
  end

  private

  def get_start_time(str)
    arr=str.split("-->")
    start=arr[0]
    time=start.split(".")
    miliseconds=time[1].to_i
    hour,minute,second=time[0].split(":")
    (hour.to_i*60*60+minute.to_i*60+second.to_i)*1000+miliseconds
  end
end

