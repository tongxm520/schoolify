class Paragraph < ActiveRecord::Base
  attr_accessible :section_id,:chapter_id,:course_id, :title, :video_path
  attr_accessible :srt_path,:content,:position,:content_type

  belongs_to :section

  def self.generate_file_path(section_id,teacher_id,file_name)
    @section=Section.find(section_id)
    @chapter=@section.chapter

    path=(Schoolify::RootPath.split("/") << teacher_id << "courses" << @chapter.course_id << "videos").join("/")
    FileUtils.mkdir_p(path) unless File.exist?(path)

    uuid = SecureRandom.uuid
    ext  = File.extname(file_name)
    #basename=File.basename(file_name,".*")
    file_name="#{uuid}#{ext}"
    save_file = "#{path}/#{file_name}"
    file_path=["","uploads","teachers",teacher_id,"courses",@chapter.course_id,"videos","#{file_name}"].join("/")
    [save_file,file_path]
  end
end


