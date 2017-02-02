class CreateBathrooms < ActiveRecord::Migration
  def change
    create_table :bathrooms do |t|
      t.string :description, null: false
      t.string :gender, null: false
      t.string :url
      t.float :lat, null: false
      t.float :lng, null: false
      t.boolean :single, null: false

      t.timestamps null: false
    end

    add_index :bathrooms, [:lat, :lng, :gender], unique: true
  end
end
