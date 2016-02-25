class Api::SessionsController < ApplicationController
  def new
    @user ||= User.new
  end

  def create
    # session[:session_token] = "SOME TOKEN"
    # @user = User.last
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    # sign_in(@user) if @user
    if @user
      session[:session_token] = @user.session_token
      session[:email] = @user.email
    end
  end

  def destroy
    sign_out
    render :new
  end
end
