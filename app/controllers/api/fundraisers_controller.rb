class Api::FundraisersController < ApplicationController
  before_action :require_login, except: :show

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
    require_correct_user
  end

  def update
    @fundraiser = Fundraiser.find_by_id(params['id'])
    @fundraiser.update!(fundraiser_params)
    require_correct_user
  end

  def destroy
    @fundraiser = Fundraiser.find_by_id(params['id'])
    require_correct_user
    @fundraiser.destroy! unless current_user.id == @fundraiser.user_id
    render :root unless current_user.id == @fundraiser.user_id
  end

  private

  def require_login
    redirect_to :root unless current_user
  end

  def require_correct_user
    redirect_to :root unless current_user.id == @fundraiser.user_id
  end

  def fundraiser_params
    params.require(:fundraiser).permit(
      :title,
      :description,
      :image_url,
      :goal_amount,
      :user_id,
      :category,
      :thumbnail_url
    )
  end
end
