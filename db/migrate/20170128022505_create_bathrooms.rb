class CreateBathrooms < ActiveRecord::Migration
  def change
    create_table :bathrooms do |t|
      t.string :description, null: false
      t.string :gender, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.int :user_id, null: false

      t.timestamps null: false
    end
  end
end
