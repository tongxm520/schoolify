class WelcomeController < ApplicationController
  skip_before_filter :authorize,:except=>[:index]  

  def index
    @course=Course.first
    @chapters=@course.chapters.order("position asc")
    ids=@chapters.map &:id
    @chapter_hash=Section.where(['chapter_id in (?)', ids]).order("position asc").group_by &:chapter_id

    @captions=Section.new.extract_captions

    render layout: "course_video"
  end

  def custom
    render layout: "custom"
  end

  def skins
   render layout: "skins"
  end

  def origin
    render layout: "origin"
  end

  def create
    arr = User.authenticate(params[:email],params[:password])
    if arr[0]&&arr[1]
      self.current_user= arr[1]
      render :json => { :data => "ok", :path=>user_path(arr[1]) }.to_json
    elsif !arr[0]&&arr[1]
      render :json => { :data => "inactivate", :email=>arr[1].email }.to_json
    elsif arr[0]&&!arr[1]
      render :json => { :data => "error",:info=>"用户密码错误"}.to_json
    else
      render :json => { :data => "error",:info=>"用户帐号错误"}.to_json
    end
  end

  def destroy
    session[:user_id] = nil
    @current_user = nil
    redirect_to homepage_url, :alert => "用户已经退出"
  end

  def homepage
    render layout: "course_video"
  end

  def register
    @user=User.new(user_params)
    if @user.save
      begin
        UserMailer.signup_notification(@user,Schoolify::BASE_URL).deliver
      rescue Exception => e
        Rails.logger.error "error when signup notification email for user:[#{@user.id}]   error_message:"+e.message #e.backtrace
      end
      render :json => { :data => "ok", :email=>@user.email }.to_json
    else
      logger.info(@user.errors.full_messages.inspect)
      render :json=>{ :data => "error", :msg=>@user.errors.full_messages.inspect}.to_json
    end
  end

  def confirm
  end

  def reactivate
  end

  def reactive
    @user=User.find_by_email(params[:email])
    respond_to do |format|
      if @user
				begin
          UserMailer.signup_notification(@user,Schoolify::BASE_URL).deliver
				rescue Exception => e
				  Rails.logger.error "error when signup notification email for user:[#{@user.id}]   error_message:"+e.message #e.backtrace
				end
        format.html { redirect_to confirm_url(:email=>params[:email]) }
      else
        flash.now[:error]="邮件地址找不到用户，请重新输入"
        format.html { render :action=>:reactivate }
      end
    end
  end

  def identical_email
    is_available=nil
    is_available=User.find_by_email(params[:user][:email])
    render :json => {:valid=>!is_available }.to_json
  end
  
  private

  def user_params
    params.require(:user).permit(:name,:real_name,:email,:encrypted_password,
    :salt,:password,:password_confirmation)
  end
end

=begin
activity_types: id, name
activities: id, activity_type_id, occurrences, date (other fields)

Activity.joins(:activity_types)
.select("activity_types.id, activity_types.name, SUM(activities.occurrences) as occurrences")
.group("activity_types.id, activity_types.name")
.order("activity_types.id")
=end


