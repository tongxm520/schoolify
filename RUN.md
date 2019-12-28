##mysqld_safe --defaults-file=/home/simon/Desktop/Depot/config/my.cnf --user=mysql &
##mysqld_safe --defaults-file=/etc/mysql/my.cnf --user=mysql &

https://app.studiesweekly.com/online/publications/58784/units/66267/edit_test
https://app.studiesweekly.com/online/
4972
Txm7366087

https://lagunita.stanford.edu
tongxiaoming520@163.com
Txm7366087

http://localhost:3000/admin/courses/2/chapters/new

rake db:drop
rake db:create
rake db:migrate
rake db:load_data
rails runner script/load_course.rb

<select name="section[content_type]" class="select-type" >
<option value="Course">课程</option>
<option value="Question">试卷</option>
</select>

##.gitignore not working The solution!
Long story short you have to remove all tracked files and add them back in using the below commands
git rm -r --cached .
git add .
git commit -a -m ".gitignore is now working"

#################################################
cd /home/simon/Desktop/schoolify
bundle install

cd /home/simon/exercise
cap unicorn:stop
cd /home/simon/Desktop/schoolify
sudo service schoolify_develop start

cd /home/simon/exercise
cap nginx:stop

cd /home/simon/Desktop/schoolify
sudo cp config/nginx_develop.cnf /etc/nginx/sites-enabled/exercise
sudo service nginx start

#bundler: failed to load command: unicorn (/usr/local/bin/unicorn)
bundle exec unicorn -c config/unicorn_develop.rb -E development -D
你先找到原有的unicorn进程，杀掉他。再重新启动unicorn。
ps aux | grep unicorn
kill -9  端口号
重启unicorn

Actually, the error message has already told you why:
directory for pid=/home/simon/Desktop/schoolify/shared/pids/unicorn.pid not writable
So, does the directory /home/simon/Desktop/schoolify/shared/pids exist? If not, you should call mkdir to create it.
#################################################

location ~ (.)/x-progress-id:(\w) {
    rewrite ^(.)/x-progress-id:(\w)  $1?X-Progress-ID=$2;
}

location / {
  # proxy to upstream server
  proxy_pass http://unicorn_schoolify;
  proxy_redirect default;
  try_files $uri/index.html $uri @unicorn_schoolify;

  # track uploads in the 'proxied' zone
  # remember connections for 30s after they finished
  track_uploads proxied 30s;
}


chmod +x /path/to/upload.sh
./upload.sh http://www.schoolify.com/upload_file http://www.schoolify.com/progress


$ cd /home/simon/Downloads/stanford/nginx-1.10.3
$ ./configure --add-module=../nginx-upload-module-2.2 --add-module=../masterzen-nginx-upload-progress-module-v0.9 --with-http_ssl_module --with-stream
$ sudo make
$ sudo make install

$ cd /home/simon/Downloads/stanford/nginx-1.0.15
$ ./configure --add-module=../nginx-upload-module-2.2 --add-module=/home/simon/nginx-upload-progress-module --with-http_ssl_module
$ sudo make
$ sudo make install


rails g migration add_view_path_to_upload
rails g migration change_integer_limit_in_uploads

Digest::MD5.hexdigest(File.read("/home/simon/Downloads/stanford/2+-+1+-+Distributed+File+Systems+(15_50).mp4"))

Digest::MD5.hexdigest(File.read("/home/simon/Downloads/stanford/2+-+1+-+Distributed+File+Systems+(15_50).srt"))

 
登录mysql
mysql -u root -p
show databases;
use school_dev;
show create table uploads;
uploads | CREATE TABLE `uploads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uploaded_size` bigint(20) DEFAULT '0',
  `total_size` bigint(20) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `view_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci


Vmware 清理磁盘空间
虚拟机的磁盘空间为了以后使用方便其是只增长的，如果不清理是不会自动减少空间占用的。

清理方法：

1）打开虚拟机（安装过 vmware-tools），进入 shell 运行下面命令：
$ vmware-toolbox-cmd disk shrink /

2）虚拟机关机状态下
打开 虚拟机-设置 
在打开的窗口选择 常规 
点击页面下端的“清理虚拟机”按钮



