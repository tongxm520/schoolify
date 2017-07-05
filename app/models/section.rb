class Section < ActiveRecord::Base
  attr_accessible :chapter_id, :title,:course_id,:position,:type
  belongs_to :chapter
  has_many :paragraphs,:dependent=>:destroy
end

