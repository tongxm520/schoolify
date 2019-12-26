class Upload < ActiveRecord::Base
  attr_accessible :filename,:path,:uploaded_size,:total_size,:view_path
end
