class Admin::CoursesController < ApplicationController
  def new
    @course = Course.new
    #3.times do
    #  chapter = @course.chapters.build
    #end
    #@chapter_confirm="您确定删除这一章吗？"
    #@section_confirm="您确定删除这一节吗？"

    #@chapter_info="最后一章不能删除！"
    #@section_info="该章最后一节不能删除！"

    #logger.info("params=> "+params.inspect)
    #logger.info("HTTP_USER_AGENT=> "+request.env["HTTP_USER_AGENT"])
    #logger.info("HTTP_HOST=> "+request.env['HTTP_HOST'])
    #logger.info("REMOTE_ADDR=> "+request.env['REMOTE_ADDR'])
    #logger.info(response.inspect)

    render layout: "course_video"
  end

  def create
    @course = Course.new(course_params)

    respond_to do |format|
      if @course.save
        format.html {redirect_to admin_courses_path}
      else
        format.html {render action: "new",layout: "course_video"}
      end
    end
  end

  def index
    @courses=current_user.teacher.courses.includes(:category)
    @user_name=current_user.name
    render layout: "course_video"
  end

  private
  # Using a private method to encapsulate the permissible parameters is
  # a good pattern since you'll be able to reuse the same permit
  # list between create and update. Also, you can specialize this method
  # with per-user checking of permissible attributes.
  def course_params
    params["course"]["teacher_id"]=current_user.teacher.id
    #logger.info("params[:course]=>"+params[:course].inspect)
    #params.require(:course).permit(:category_id, :subtitle,:title,
    #:teacher_id,:chapters_attributes=>[:title,:position,:sections_attributes=>[:title,:position]])
    params.require(:course).permit(:category_id, :subtitle,:title,:teacher_id,
    :description,:course_logo)
  end
end




