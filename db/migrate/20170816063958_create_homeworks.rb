class CreateHomeworks < ActiveRecord::Migration
  def change
    create_table :homeworks do |t|
      t.string :title, :null=>false
      t.integer :chapter_id, :null=>false
      t.integer :position, :null=>false

      t.timestamps
    end
  end
end
