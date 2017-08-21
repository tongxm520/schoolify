class Admin::CoursesController < ApplicationController
  def new
    @course = Course.new
    3.times do
      chapter = @course.chapters.build
    end
    @chapter_confirm="您确定删除这一章吗？"
    @section_confirm="您确定删除这一节吗？"

    @chapter_info="最后一章不能删除！"
    @section_info="该章最后一节不能删除！"

    logger.info("params=> "+params.inspect)
    logger.info("HTTP_USER_AGENT=> "+request.env["HTTP_USER_AGENT"])
    logger.info("HTTP_HOST=> "+request.env['HTTP_HOST'])
    logger.info("REMOTE_ADDR=> "+request.env['REMOTE_ADDR'])
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
  end

  private
  # Using a private method to encapsulate the permissible parameters is
  # a good pattern since you'll be able to reuse the same permit
  # list between create and update. Also, you can specialize this method
  # with per-user checking of permissible attributes.
  def course_params
    params["course"]["category_id"]=1
    params["course"]["user_id"]=1
    #logger.info("params[:course]=>"+params[:course].inspect)
    params.require(:course).permit(:category_id, :subtitle,:title,
    :user_id,:chapters_attributes=>[:title,:position,:sections_attributes=>[:title,:position]])
  end
end

=begin
Parameters: {"utf8"=>"✓", "authenticity_token"=>"u6/+kcQtQb/61nASFnThQ4TYEiNLfOS8WkObLNo1UVM=", "course"=>{"title"=>"hello world", "subtitle"=>"hey kitty", "chapters_attributes"=>{"0"=>{"position"=>"1", "title"=>"turn on the computer", "sections_attributes"=>{"0"=>{"position"=>"0", "title"=>"ch one section one"}, "1"=>{"position"=>"1", "title"=>"ch one section two"}, "2"=>{"position"=>"2", "title"=>"ch one section three"}}}, "1"=>{"position"=>"2", "title"=>"open the browser", "sections_attributes"=>{"0"=>{"position"=>"0", "title"=>"chapter two section one"}, "1"=>{"position"=>"1", "title"=>"chapter two section two"}, "2"=>{"position"=>"2", "title"=>"chapter two section three"}}}, "2"=>{"position"=>"3", "title"=>"visit google", "sections_attributes"=>{"0"=>{"position"=>"0", "title"=>"chapter three 1111"}, "1"=>{"position"=>"1", "title"=>"chapter three 2222"}, "2"=>{"position"=>"2", "title"=>"chapter three 3333"}}}}}, "commit"=>"Create Course"}
=end



