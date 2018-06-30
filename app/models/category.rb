class Category < ActiveRecord::Base
  attr_accessible :course_count, :name
  has_many :courses
end
