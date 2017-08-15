class Admin::CoursesController < ApplicationController
  def new
    logger.info("params=> "+params.inspect)
    logger.info("HTTP_USER_AGENT=> "+request.env["HTTP_USER_AGENT"])
    logger.info("HTTP_HOST=> "+request.env['HTTP_HOST'])
    logger.info("REMOTE_ADDR=> "+request.env['REMOTE_ADDR'])
    #logger.info(response.inspect)
    render layout: "course_video"
  end
end
