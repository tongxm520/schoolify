class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :filename, :null=>false
      t.string :path, :null=>false
      t.integer :uploaded_size, :default=>0
      t.integer :total_size, :null=>false

      t.timestamps
    end
  end
end
