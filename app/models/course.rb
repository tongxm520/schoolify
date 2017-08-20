class Course < ActiveRecord::Base
  attr_accessible :category_id, :subtitle, :title,:user_id
  has_many :chapters,:dependent=>:destroy
  attr_accessible :chapters_attributes
  accepts_nested_attributes_for :chapters, :reject_if => lambda { |a| a[:title].blank? }

  private
  def course_params
    # It's mandatory to specify the nested attributes that should be whitelisted.
    # If you use `permit` with just the key that points to the nested attributes hash,
    # it will return an empty hash.
    params.require(:course).permit(:chapters_attributes=>[:title,:position])
  end
end
