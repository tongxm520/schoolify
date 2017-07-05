class Chapter < ActiveRecord::Base
  attr_accessible :course_id, :title,:position
  belongs_to :course
  has_many :lectures
  has_one :outline
  has_one :homework
end
