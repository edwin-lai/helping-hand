class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user ||= User.new
  end

  def create
    user_params[:bank] = 500
    @user = User.new(user_params)
    sign_in(@user) if @user.save
  end

  def show
    @user = User.find_by_id(params['id'])
  end

  def show_current_user
    @user = current_user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
