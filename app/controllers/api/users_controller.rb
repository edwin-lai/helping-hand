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
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def show
    @user = User.find_by_id(params['id'])
  end

  def show_current_user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

  def require_logged_out
    redirect_to :root if current_user
  end
end
