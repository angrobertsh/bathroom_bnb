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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170131061428) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bathrooms", force: :cascade do |t|
    t.string   "description", null: false
    t.string   "gender",      null: false
    t.string   "url"
    t.float    "lat",         null: false
    t.float    "lng",         null: false
    t.boolean  "single",      null: false
    t.boolean  "accessible",  null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "bathrooms", ["lat", "lng", "gender"], name: "index_bathrooms_on_lat_and_lng_and_gender", unique: true, using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "body",        null: false
    t.string   "user_id",     null: false
    t.string   "bathroom_id", null: false
    t.integer  "stars",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["user_id", "bathroom_id"], name: "index_reviews_on_user_id_and_bathroom_id", unique: true, using: :btree

  create_table "tags", force: :cascade do |t|
    t.integer  "bathroom_id", null: false
    t.string   "tagname",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "tags", ["bathroom_id"], name: "index_tags_on_bathroom_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "username",        null: false
    t.string   "url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "votes", force: :cascade do |t|
    t.integer  "value",        null: false
    t.integer  "user_id"
    t.integer  "votable_id"
    t.string   "votable_type"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "votes", ["votable_type", "votable_id"], name: "index_votes_on_votable_type_and_votable_id", using: :btree

end
