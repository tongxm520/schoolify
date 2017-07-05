class CreateBookmarks < ActiveRecord::Migration
  def change
    create_table :bookmarks do |t|
      t.integer :course_id, :null=>false
      t.integer :user_id, :null=>false
      t.integer :paragraph_id, :null=>false

      t.timestamps
    end
  end
end
