class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.string :user_id, null: false
      t.string :bathroom_id, null: false

      t.timestamps null: false
    end
    add_index :reviews, [:user_id, :bathroom_id], unique: true
  end
end
