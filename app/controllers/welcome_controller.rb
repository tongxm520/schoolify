class WelcomeController < ApplicationController
  def index
    @course=Course.first
    @chapters=@course.chapters.order("position asc")
    ids=@chapters.map &:id
    @chapter_hash=Section.where(['chapter_id in (?)', ids]).order("position asc").group_by &:chapter_id

    @captions=Lecture.new.extract_captions

    render layout: "default"
  end

  def custom
    render layout: "custom"
  end

  def skins
   render layout: "skins"
  end

  def origin
    render layout: "origin"
  end
end

=begin
activity_types: id, name
activities: id, activity_type_id, occurrences, date (other fields)

Activity.joins(:activity_types)
.select("activity_types.id, activity_types.name, SUM(activities.occurrences) as occurrences")
.group("activity_types.id, activity_types.name")
.order("activity_types.id")
=end


