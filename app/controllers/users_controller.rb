class UsersController < ApplicationController
  def new
    @user ||= User.new
  end

  def create
    user_params[:bank] = 500
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to fundraisers_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
