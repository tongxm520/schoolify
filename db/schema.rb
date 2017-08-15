# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20170703124333) do

  create_table "bookmarks", :force => true do |t|
    t.integer  "course_id",    :null => false
    t.integer  "user_id",      :null => false
    t.integer  "paragraph_id", :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "categories", :force => true do |t|
    t.string   "name",                        :null => false
    t.integer  "course_count", :default => 0
    t.datetime "created_at",                  :null => false
    t.datetime "updated_at",                  :null => false
  end

  create_table "chapters", :force => true do |t|
    t.string   "title",      :null => false
    t.integer  "course_id",  :null => false
    t.integer  "position",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "courses", :force => true do |t|
    t.string   "title",       :null => false
    t.string   "subtitle",    :null => false
    t.integer  "category_id", :null => false
    t.integer  "user_id",     :null => false
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "paragraphs", :force => true do |t|
    t.string   "title",        :null => false
    t.integer  "chapter_id",   :null => false
    t.integer  "section_id",   :null => false
    t.integer  "course_id",    :null => false
    t.integer  "bookmark_id",  :null => false
    t.boolean  "video_only",   :null => false
    t.text     "content",      :null => false
    t.integer  "position",     :null => false
    t.string   "content_type", :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "sections", :force => true do |t|
    t.string   "title",      :null => false
    t.integer  "chapter_id", :null => false
    t.integer  "course_id",  :null => false
    t.integer  "position",   :null => false
    t.string   "type",       :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "name",                      :null => false
    t.string   "email"
    t.string   "encrypted_password"
    t.string   "salt"
    t.string   "remember_token"
    t.datetime "remember_token_expires_at"
    t.string   "activation_code"
    t.datetime "activated_at"
    t.string   "logo_path"
    t.string   "logo_name"
    t.string   "small_logo_path"
    t.string   "medium_logo_path"
    t.string   "large_logo_path"
    t.datetime "created_at",                :null => false
    t.datetime "updated_at",                :null => false
  end

end
