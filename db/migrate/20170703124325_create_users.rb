class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, :null=>false
      t.string :real_name
			t.string :email
			t.string :encrypted_password
			t.string :salt
			t.string   :remember_token                          
			t.datetime :remember_token_expires_at
			t.string   :activation_code                     
			t.datetime :activated_at
			t.string   "logo_path"
			t.string   "logo_name"
			t.string   "small_logo_path"
			t.string   "medium_logo_path"
			t.string   "large_logo_path"
      t.boolean :admin, :default=>false
      t.timestamps
    end
  end
end
