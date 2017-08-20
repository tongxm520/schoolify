class Outline < ActiveRecord::Base
  attr_accessible :chapter_id, :title,:position
  belongs_to :chapter
end
