class ChangeIntegerLimitInUploads < ActiveRecord::Migration
  def change
    change_column :uploads, :uploaded_size, :integer, limit: 8
    change_column :uploads, :total_size, :integer, limit: 8
  end
end
