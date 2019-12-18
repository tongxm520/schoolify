class Admin::SectionsController < ApplicationController
  def create
    chapter=Chapter.find(params[:chapter_id])
    owner=chapter.course.teacher.user
    if owner!=current_user
      render :json => {:data=>'error',:message=>'current user must be owner of the course' }.to_json
      return
    end

    @section=chapter.sections.create(params[:section])
    unless @section.id.nil?
      render :json => {:data=>'ok',:id=>@section.id,:title=>@section.title }.to_json
    else
      render :json => {:data=>'error',:message=> @section.errors["title"]}.to_json
    end
  end

  def destroy
    section=Section.find_by_id(params[:id])
    if section
		  owner=section.chapter.course.teacher.user
      #TODO: add teacher_id to section to avoid multilevel query
		  if owner!=current_user
		    render :json => {:data=>'error',:message=>'current user must be owner of the course' }.to_json
		    return
		  end
    end

    if section
      section.destroy 
      render :json => {:data=>'ok' }.to_json
    else
      render :json => {:data=>'error',:message=>'section not found' }.to_json
    end
  end

  def update
    section=Section.find(params[:id])
    if section
		  owner=section.chapter.course.teacher.user
      #TODO: add teacher_id to section to avoid multilevel query
		  if owner!=current_user
		    render :json => {:data=>'error',:message=>'current user must be owner of the course' }.to_json
		    return
		  end
    end

    if section.update_attributes(params[:section])
      render :json => {:data=>'ok',:title=>section.title }.to_json
    else
      render :json => {:data=>'error',:message=>section.errors[:title] }.to_json
    end
  end

  def edit
    @section=Section.find(params[:id])
    @chapter=@section.chapter
    @course=@chapter.course
    render layout: "course_video"
  end

  def upload_file
    @section=Section.find(params[:section_id])
    @chapter=@section.chapter

    path=(Schoolify::RootPath.split("/") << current_user.teacher.id << "courses" << @chapter.course_id << "videos").join("/")
    FileUtils.mkdir_p(path)
    
    key=Time.now.strftime("%Y%m%d%H%M%S")
    basename=File.basename(params[:video].original_filename,".*")
    ext_name=params[:video].original_filename.split(".")[-1]
    video_name="#{basename}_#{key}.#{ext_name}"
    save_video = "#{path}/#{video_name}"
    video_path=["","uploads","teachers",current_user.teacher.id,"courses",@chapter.course_id,"videos","#{video_name}"].join("/")
    FileUtils.mv params[:video].tempfile.path, save_video

    key=Time.now.strftime("%Y%m%d%H%M%S")
    basename=File.basename(params[:srt].original_filename,".*")
    ext_name=params[:srt].original_filename.split(".")[-1]
    srt_name="#{basename}_#{key}.#{ext_name}"
    save_srt = "#{path}/#{srt_name}"
    srt_path=["","uploads","teachers",current_user.teacher.id,"courses",@chapter.course_id,"videos","#{srt_name}"].join("/")
    FileUtils.mv params[:srt].tempfile.path, save_srt

    redirect_to edit_admin_section_path(params[:section_id])
  end
end


