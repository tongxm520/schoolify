class AddCourseLogoToCourse < ActiveRecord::Migration
  def change
    add_column :courses, :course_logo, :string
  end
end
