class Admin::ChaptersController < ApplicationController
  def new
    @course=Course.find(params[:course_id])
    @chapter=@course.chapters.build
    chapters=@course.chapters.includes(:sections)
    chapters_arr=[]
    chapters.each do |ch|
      chapter_hash=Hash.new
      chapter_hash[:id]=ch.id
      chapter_hash[:text]=ch.title.gsub(/['"]/,"")
      chapter_hash[:state]= {:leaf=>false,:expanded=>true,:empty=>false,:editing=>false}
      if ch.sections.present?
        sections_arr=[]
        ch.sections.each do |sec|
          section_hash=Hash.new
          section_hash[:id]=ch.id.to_s+"-"+sec.id.to_s
          section_hash[:text]=sec.title.gsub(/['"]/,"")
          section_hash[:state]= {:leaf=>true,:expanded=>false,:empty=>false,:editing=>false}
          sections_arr << section_hash
        end
        chapter_hash[:nodes]=sections_arr
      end
      chapters_arr << chapter_hash
    end
    @chapters_json=chapters_arr.to_json
    render layout: "course_video"
    #TODO:support for json including single quotes and double quotes in the value
  end

  def create
    course=Course.find(params[:course_id])
    owner=course.teacher.user
    if owner!=current_user
      render :json => {:data=>'error',:message=>'current user must be owner of the course' }.to_json
      return
    end

    @chapter=course.chapters.create(params[:chapter])
    unless @chapter.id.nil?
      render :json => {:data=>'ok',:id=>@chapter.id,:title=>@chapter.title }.to_json
    else
      render :json => {:data=>'error',:message=> @chapter.errors["title"]}.to_json
    end    
  end

  def destroy
    chapter=Chapter.find_by_id(params[:id])
    if chapter
		  owner=chapter.course.teacher.user
		  if owner!=current_user
		    render :json => {:data=>'error',:message=>'current user must be owner of the course' }.to_json
		    return
		  end
    end

    if chapter
      chapter.destroy 
      render :json => {:data=>'ok' }.to_json
    else
      render :json => {:data=>'error',:message=>'chapter not found' }.to_json
    end
  end

  def update
    chapter=Chapter.find(params[:id])

    if chapter
		  owner=chapter.course.teacher.user
		  if owner!=current_user
		    render :json => {:data=>'error',:message=>'current user must be owner of the course' }.to_json
		    return
		  end
    end

    if chapter.update_attributes(params[:chapter])
      render :json => {:data=>'ok',:title=>chapter.title }.to_json
    else
      render :json => {:data=>'error',:message=>chapter.errors[:title] }.to_json
    end
  end
end

#Chapter.find(19).update_attribute(:disabled => true)

#capture exception=>
#ActiveRecord::RecordNotFound
#ActiveModel::MassAssignmentSecurity::Error: Can't mass-assign protected attributes: content


