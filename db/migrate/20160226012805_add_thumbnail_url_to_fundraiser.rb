class AddThumbnailUrlToFundraiser < ActiveRecord::Migration
  def change
    add_column :fundraisers, :thumbnail_url, :string, null: false
  end
end
