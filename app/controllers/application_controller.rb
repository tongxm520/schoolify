class ApplicationController < ActionController::Base
  protect_from_forgery
  include AuthenticationSystem
  skip_before_filter  :verify_authenticity_token

  before_filter :authorize

  def authorize
    unless authorized? 
      if request.xhr?     
        render :json => { :notice =>"Please log in" }.to_json
      else
        redirect_to homepage_url,:notice =>"Please log in"
      end 
      
      #TODO:Open a rails form with Twitter Bootstrap modals
      #respond_to do |format| 
        #format.js {render 'welcome/ajaxlogin'}
      #end
    end
  end
end

=begin
Rails 3 returning a HTTP 406 Not Acceptable?

Remove respond_to do |format| blocks. Because you are not specifying to what format are you responding, e.g. format.html { #your code here } . Check documentation of respond_to how to use it properly.
=end
