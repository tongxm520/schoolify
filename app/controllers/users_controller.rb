class UsersController < ApplicationController
  skip_before_filter :authorize,:only=>[:activate] 

  def activate
    user = User.find_by_activation_code(params[:id]) unless params[:id].blank?
    case
    when (!params[:id].blank?) && user && !user.active?
      user.activate!
			self.current_user = user
		  redirect_to user_path(user)
    when params[:id].blank?
      flash.now[:error] =  "激活码缺失，请查收并点击您邮箱中的激活链接！"
      respond_to do |format|
        format.html
      end
    else 
      flash.now[:error]  = %Q{用户未找到，请查收您邮箱中的激活链接。或者此账号已激活，请尝试<a href="/login">登录</a>！}
      respond_to do |format|
        format.html
      end
    end
  end

  def show
    render layout: "course_video"
  end
end
