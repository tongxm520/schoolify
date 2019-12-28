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

    video=Paragraph.generate_file_path(@section,current_user.teacher.id,params[:video][:original_filename])
    FileUtils.mv params[:video][:tempfile], video[0]

    srt=Paragraph.generate_file_path(@section,current_user.teacher.id,params[:srt][:original_filename])
    FileUtils.mv params[:srt][:tempfile], srt[0]

    render :json => {:data=>'ok' }.to_json
  end

  #redirect_to edit_admin_section_path(params[:section_id])
  def upload_video
    @section=Section.find(params[:section_id])
    paths=Paragraph.generate_file_path(@section,current_user.teacher.id,params[:filename])

    @upload = Upload.new(
      filename: params[:filename],
      path: paths[0],
      view_path: paths[1],
      total_size: params[:totalsize]
    )

    if @upload.save
      render json: { status: "ok",id: @upload.id, uploaded_size: @upload.uploaded_size }
    else
      render json: { status: "error",error: @upload.errors }
    end
  end

  def chunk_upload
    file = File.open(params[:file][:tempfile])
    @upload = Upload.find(params[:id])
    @upload.uploaded_size += file.size

    if @upload.save
      File.open(@upload.path, 'ab') { |f| f.write(file.read) }
      if params[:upload_type]=="srt"&&@upload.uploaded_size==@upload.total_size
        render json: {status: "complete",id: @upload.id, uploaded_size: @upload.uploaded_size}
      elsif params[:upload_type]=="video"&&@upload.uploaded_size==@upload.total_size
        render json: {status: "video-complete", id: @upload.id, uploaded_size: @upload.uploaded_size }
      else
        render json: {status: "uploading", id: @upload.id, uploaded_size: @upload.uploaded_size }
      end
    else
      render json: {status: "error",error: @upload.errors }, status: 422
    end
  end
end


