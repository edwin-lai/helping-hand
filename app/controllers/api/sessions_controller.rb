class Api::SessionsController < ApplicationController
  def new
    @user ||= User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      session[:session_token] = @user.session_token
      session[:email] = @user.email
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end

  def destroy
    sign_out
    redirect_to '/', status: 303
  end
end
