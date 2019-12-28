require "rubygems"
require "mini_magick"

image = MiniMagick::Image.open("/home/simon/car.png")
puts image.path
image.resize "100x100"
image.format "png"
image.write "/home/simon/car_output.png"


