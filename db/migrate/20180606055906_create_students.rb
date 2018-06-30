class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.integer :user_id, :null=>false
      t.timestamps
    end
  end
end
