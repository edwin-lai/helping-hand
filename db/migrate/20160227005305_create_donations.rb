class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.integer :amount
      t.integer :user_id
      t.integer :fundraiser_id
      t.text :comment
      t.boolean :visible, default: true

      t.timestamps null: false
    end

    add_index :donations, :user_id
    add_index :donations, :fundraiser_id
  end
end
