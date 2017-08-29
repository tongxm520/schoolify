class ApplicationController < ActionController::Base
  protect_from_forgery
  include AuthenticationSystem

  before_filter :authorize

  def authorize
    unless User.find_by_id(session[:user_id])
      respond_to do |format|
        redirect_to homepage_url,:notice =>"Please log in" 
        #TODO:Open a rails form with Twitter Bootstrap modals 
        #format.js {render 'welcome/ajaxlogin'}
      end
    end
  end
end
