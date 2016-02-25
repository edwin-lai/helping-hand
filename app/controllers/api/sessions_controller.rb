class SessionsController < ApplicationController
  def new
    @user ||= User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    sign_in(@user) if @user
  end

  def destroy
    sign_out
  end
end
