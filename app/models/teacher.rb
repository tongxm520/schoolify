class Teacher < ActiveRecord::Base
  attr_accessible :user_id, :faculty_id
  attr_accessible :birth,:company,:mobile,:occupation,:skill,:profile

  belongs_to :user
  has_many :courses

  def self.set_uploaded_file(source,teacher_id,course_id)
    path=(Schoolify::RootPath.split("/") << teacher_id << "courses" << course_id).join("/")
    FileUtils.mkdir_p(path)
    
    key=[Time.now.strftime("%Y%m%d%H%M%S"),'.png'].join('')
    basename=File.basename(source[:upload].original_filename,".*")
    file_name="#{basename}_#{key}"
    save_file = "#{path}/#{file_name}"
    
    File.open(save_file, 'wb') { |f| f.write(source[:upload].tempfile.read) }
    image_path=["","uploads","teachers",teacher_id,"courses", course_id,"#{file_name}"].join("/")
    [file_name,image_path]
  end
end
