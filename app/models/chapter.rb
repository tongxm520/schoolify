class Chapter < ActiveRecord::Base
  attr_accessible :course_id, :title,:position
  #attr_accessible :sections_attributes
  belongs_to :course
  has_many :sections,:dependent=>:destroy
  
  #accepts_nested_attributes_for :sections, :reject_if => lambda { |a| a[:title].blank? }

  validates :title , format: {with: /^[\u4e00-\u9fa5]{3,20}$|^[a-zA-Z0-9_'\:\-\,\(\)\[\]\?]+( [a-zA-Z0-9_'\:\-\,\(\)\[\]\?]+)*$/,message: "必须由空格a-zA-Z0-9'_:-,()[]?或3到20个汉字组成"}
  validates :title ,length: {maximum: 55,message: "章节名称必须少于55个字符"}

  private
  def chapter_params
    #params.require(:chapter).permit(:sections_attributes=>[:title,:position])
    params.require(:chapter).permit(:course_id,:title,:position)
  end
end
