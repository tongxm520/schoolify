namespace :db do
  desc "TODO"
  task :load_data => :environment do
    require 'active_record/fixtures'
    Dir.glob(Rails.root.to_s + '/db/fixtures/*.yml').each do |file|
      ActiveRecord::Fixtures.create_fixtures('db/fixtures', File.basename(file, '.*'))
    end
  end
end
