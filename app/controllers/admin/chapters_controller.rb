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
      chapter_hash[:state]= {:leaf=>false,:expanded=>true,:empty=>false}
      if ch.sections.present?
        sections_arr=[]
        ch.sections.each do |sec|
          section_hash=Hash.new
          section_hash[:id]=ch.id.to_s+"-"+sec.id.to_s
          section_hash[:text]=sec.title.gsub(/['"]/,"")
          section_hash[:state]= {:leaf=>true,:expanded=>false,:empty=>false}
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
end


