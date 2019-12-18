class WelcomeController < ApplicationController
  skip_before_filter :authorize,:except=>[:index,:editor,:upload] 

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
      if session[:return_to]
        path=session[:return_to]
        session[:return_to] = nil
      else
        path=user_path(arr[1])
      end
      render :json => { :data => "ok", :path=>path }.to_json
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

  def editor
  end

  #{"fileName": "bar-chart.png","uploaded": 1,"url": "/userfiles/images/bar-chart.png"}
  #{"uploaded": 0,"error": { "message": "The file is too big."} }
  def upload
    unless params[:upload]
      render :text => {:uploaded=>0,:error=>{:message=>"params[:upload] is required"}}.to_json
      return
    end
    if ["image/png","image/bmp","image/jpeg","image/gif"].exclude?(params[:upload].content_type)
      @message="The image must be in JPEG or PNG or BMP or GIF format. "
      @text={:uploaded=>0,:error=>{:message=>@message}}.to_json
    elsif !params[:upload].tempfile
      @message="You may be attempting to hack our server."
      @text={:uploaded=>0,:error=>{:message=>@message}}.to_json
    elsif params[:upload].tempfile.size > 1.megabyte
      @message="The image size must be less than 1M."
      @text={:uploaded=>0,:error=>{:message=>@message}}.to_json
    else
      begin
		    filename,imagepath = Teacher.set_uploaded_file(params,current_user.teacher.id) 
		  rescue Exception => e
		    logger.error "=============>#{e.message}"
		    render :text => {:uploaded=>0,:error=>{:message=>e.message}}.to_json
		    return
      end 
      @text={:uploaded=>1,:fileName=>filename,:url=>imagepath}.to_json
    end
    render :text => @text
  end

  #/online/publications/58784/units/66267
  def articles
    render layout: "course_video"
  end

  #/online/publications/58784/units/66267/edit_test
  def edit_test
    render layout: "course_video"
  end

  #/online/publications/58784/units/66267/test_scores
  def test_scores
    render layout: "course_video"
  end

  #/online/publications/58784/units/66267/test_summary
  def test_statistics
    render layout: "course_video"
  end

  #/online/publications/58784/units/66267/highlights
  def highlights
    render layout: "course_video"
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


