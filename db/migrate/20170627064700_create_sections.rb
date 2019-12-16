class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :title, :null=>false
      t.integer :chapter_id, :null=>false
      t.integer :position
      t.string :content_type,:null=>false #Question/Course

      t.timestamps
    end
  end
end
