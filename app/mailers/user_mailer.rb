# encoding: utf-8
class UserMailer < ApplicationMailer
  def signup_notification(user,base_url)
    @user = user
    @base_url  = base_url
    mail(to: user.email, subject: 'schoolify的注册确认信')
  end
end

