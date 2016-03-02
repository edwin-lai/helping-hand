class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: [:new, :create]

  def index
    @users = User.all
  end

  def new
    @user ||= User.new
  end

  def create
    user_params[:bank] = 500
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :create
    else
      puts @user.errors.full_messages
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User.includes(:donations, fundraisers: [donations: [:user]]).find_by_id(params['id'])
  end

  def update
    if user_update_params['add'].to_i <= 0
      render json: { errors: 'Must enter a positive number.' }, status: 422
    else
      @user = User.includes(:donations, :fundraisers).find_by_id(params['id'])
      @user.update(bank: @user.bank + user_update_params['add'].to_i)
      render :show
    end
  end

  def show_current_user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name)
  end

  def user_update_params
    params.require(:user).permit(:add)
  end

  def require_logged_out
    redirect_to :root if current_user
  end
end
