class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :bathroom_id, null: false
      t.string :tagname, null: false

      t.timestamps null: false
    end
    add_index :tags, :bathroom_id
  end
end
