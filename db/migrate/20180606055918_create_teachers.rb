class CreateTeachers < ActiveRecord::Migration
  def change
    create_table :teachers do |t|
      t.integer :user_id, :null=>false
      t.integer :faculty_id, :null=>false
      t.date :birth,:null=>false
      t.string :company
      t.string :mobile,:null=>false
      t.string :occupation,:null=>false
      t.string :skill,:null=>false
      t.text :profile,:null=>false
      t.timestamps
    end
  end
end
