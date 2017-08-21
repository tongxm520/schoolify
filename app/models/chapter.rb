class Chapter < ActiveRecord::Base
  attr_accessible :course_id, :title,:position
  attr_accessible :sections_attributes
  belongs_to :course
  has_many :sections,:dependent=>:destroy
  
  accepts_nested_attributes_for :sections, :reject_if => lambda { |a| a[:title].blank? }

  private
  def chapter_params
    params.require(:chapter).permit(:sections_attributes=>[:title,:position])
  end
end
