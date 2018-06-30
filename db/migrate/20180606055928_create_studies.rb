class CreateStudies < ActiveRecord::Migration
  def change
    create_table :studies do |t|
      t.integer :student_id, :null=>false
      t.integer :course_id, :null=>false
      t.timestamps
    end
  end
end
