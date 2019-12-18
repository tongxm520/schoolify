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
git commit -m ".gitignore is now working"

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






