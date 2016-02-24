class Api::FundraisersController < ApplicationController
  def index
    @fundraisers = Fundraiser.all
  end

  def new
    @fundraiser = Fundraiser.new
  end

  def create
    @fundraiser = Fundraiser.new(fundraiser_params)
    @fundraiser.save!
  end

  def show
    @fundraiser = Fundraiser.find_by_id(params['id'])
  end

  def edit
    @fundraiser = Fundraiser.find_by_id(params['id'])
  end

  def update
    @fundraiser = Fundraiser.find_by_id(params['id'])
    @fundraiser.update!(fundraiser_params)
  end

  def destroy
    @fundraiser = Fundraiser.find_by_id(params['id'])
    @fundraiser.destroy!
    render :index
  end

  private

  def fundraiser_params
    params.require(:fundraiser).permit(
      :title,
      :description,
      :image_url,
      :goal_amount,
      :user_id,
      :category
    )
  end
end
