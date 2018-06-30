module ApplicationHelper
  def category_options
    Category.all.map{|c|  [c.name,c.id]}.unshift(["请选择分类",""])
  end
end
