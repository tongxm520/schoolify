class Paragraph < ActiveRecord::Base
  attr_accessible :bookmark_id, :section_id,:chapter_id,:course_id, :title, :video_only
  attr_accessible :content,:position,:content_type

  belongs_to :section
end


