class CreateFundraisers < ActiveRecord::Migration
  def change
    create_table :fundraisers do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.integer :goal_amount, null: false
      t.string :category, null: false

      t.timestamps null: false
    end
  end
end
