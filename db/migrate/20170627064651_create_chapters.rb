class CreateChapters < ActiveRecord::Migration
  def change
    create_table :chapters do |t|
      t.string :title, :null=>false
      t.integer :course_id, :null=>false
      t.integer :position

      t.timestamps
    end
  end
end
