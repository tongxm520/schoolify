class CreateParagraphs < ActiveRecord::Migration
  def change
    create_table :paragraphs do |t|
      t.string :title, :null=>false
      t.integer :chapter_id, :null=>false
      t.integer :section_id, :null=>false
      t.integer :course_id, :null=>false
      t.string :video_path
      t.string :srt_path
      t.text :content
      t.integer :position
      t.string :content_type, :null=>false #Form/Video/Text

      t.timestamps
    end
  end
end
