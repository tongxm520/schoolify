class Course < ActiveRecord::Base
  attr_accessible :category_id, :subtitle, :title,:user_id
  has_many :chapters,:dependent=>:destroy
end
