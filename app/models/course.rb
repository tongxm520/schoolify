class Course < ActiveRecord::Base
  attr_accessible :category_id, :subtitle, :title,:teacher_id,:description,:course_logo
  has_many :chapters,:dependent=>:destroy
  belongs_to :category
  belongs_to :teacher
  attr_accessible :chapters_attributes
  accepts_nested_attributes_for :chapters, :reject_if => lambda { |a| a[:title].blank? }

  validates :category_id, inclusion: { in: Category.all.map {|e| e.id}, message: "%{value} is invalid." }
  validates :title , format: {with: /^[\u4e00-\u9fa5]{3,16}$|^[a-zA-Z0-9_']+( [a-zA-Z0-9_']+)*$/,message: '必须由个字母、数字、下划线、空格、单引号或3到16个汉字组成'}
  validates :title ,length: {maximum: 50,message: "课程名必须少于50个字符"}
  validates :subtitle , format: {with: /^[\u4e00-\u9fa5]{3,10}$|^[a-zA-Z0-9_']+( [a-zA-Z0-9_']+)*$/,message: '必须由个字母、数字、下划线、空格、单引号或3到10个汉字组成'}
  validates :subtitle ,length: {maximum: 20,message: "课程名必须少于20个字符"}
  validates :description, :presence => true
  validates :course_logo, :presence => true
  validate :image_must_be_valid

  mount_uploader :course_logo, AvatarUploader

  private

  def image_must_be_valid
    if !course_logo.file
      errors.add(:course_logo, "You may be attempting to hack our server." )
    elsif ["image/png","image/bmp","image/jpeg"].exclude?(course_logo.file.content_type)
      errors.add(:course_logo, "The image must be in JPEG or PNG or BMP or GIF format. " )
    elsif course_logo.file.size > 1.megabyte
      errors.add(:course_logo, "The image size must be less than 1M." )
    end
  end

  def course_params
    # It's mandatory to specify the nested attributes that should be whitelisted.
    # If you use `permit` with just the key that points to the nested attributes hash,
    # it will return an empty hash.
    params.require(:course).permit(:chapters_attributes=>[:title,:position])
  end
end
