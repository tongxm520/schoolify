class Paragraph < ActiveRecord::Base
  attr_accessible :section_id,:chapter_id,:course_id, :title, :video_path
  attr_accessible :srt_path,:content,:position,:content_type

  belongs_to :section
end


