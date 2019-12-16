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
end


