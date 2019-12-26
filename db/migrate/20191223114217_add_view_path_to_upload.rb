class AddViewPathToUpload < ActiveRecord::Migration
  def change
    add_column :uploads, :view_path, :string, :null=>false
  end
end
