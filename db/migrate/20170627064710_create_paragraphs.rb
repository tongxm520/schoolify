class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.string :title, :null=>false
      t.integer :chapter_id, :null=>false
      t.integer :section_id, :null=>false
      t.integer :course_id, :null=>false
      t.integer :bookmark_id, :null=>false
      t.boolean :video_only, :null=>false
      t.text :content, :null=>false
      t.integer :position, :null=>false
      t.string :content_type, :null=>false #Form/Video/Text

      t.timestamps
    end
  end
end
