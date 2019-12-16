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

The solution!
Long story short you have to remove all tracked files and add them back in using the below commands

git rm -r --cached .
git add .
git commit -m ".gitignore is now working"


