class User < ActiveRecord::Base
  attr_accessible :name,:email,:encrypted_password,:salt,:remember_token,:real_name
  attr_accessible :remember_token_expires_at,:activation_code,:activated_at,:logo_path
  attr_accessible :logo_name,:small_logo_path,:medium_logo_path,:large_logo_path
  attr_accessible :password_confirmation,:password

  validates :email, format: {with: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, message: '请填写有效电子邮箱'}, :on => :create
  validates :password, format: {with: /^[a-zA-Z0-9~@#%&_\.\-\^\$\*\!\+\=]{6,16}$/,message: '必须由6-16个字母、数字或特殊字符组成'}, :on => :create
  validates_confirmation_of :password, :on => :create, :message=>"确认密码与上面的密码不一致"
  validates :name ,format: {with: /^[a-zA-Z0-9_]{3,20}$/,message: '必须由3-20个字母、数字或下划线组成'}
  validates :real_name ,format: {with: /^[\u4e00-\u9fa5]{2,4}$|^[a-zA-Z0-9_]{3,25}$/,message: '必须由3-25个字母、数字、下划线或2到4个汉字组成'}

  attr_accessor :password_confirmation
  attr_reader   :password

  validate  :password_must_be_present
  validate  :email_unique, :on=> :create
  
  before_create	:make_activation_code

  # 'password' is a virtual attribute
  def password=(password)
    @password = password

    if password.present?
      generate_salt
      self.encrypted_password = self.class.encrypt_password(password, salt)
    end
  end
  
  def active?
    activation_code.nil?
  end
  
  # Activates the user in the database.
  def activate!
    activate
    save(:validate => false)
  end
  
  def activate
    @activated = true
    self.activated_at = Time.now
    self.activation_code = nil
  end
 
  # Returns true if the user has just been activated.
  def recently_activated?
    @activated
  end
 
  class << self
    def authenticate(email, password)
			if user = find_by_email(email)
				if user.encrypted_password == encrypt_password(password, user.salt)
				  if user.active?
				    return [true,user]
				  else
				    return [false,user]
				  end
        else
          return [true,nil]
				end
		  end
			[false,nil]
    end

		def encrypt_password(password, salt)
			 Digest::SHA2.hexdigest(password + "wibble" + salt)
		end
		 
		def secure_digest(*args)
      Digest::SHA2.hexdigest(args.flatten.join('--'))
    end
    
		def make_token
			secure_digest(Time.now, (1..10).map{ rand.to_s })
		end
		 
		def valid_image?(file)
		  format = file.original_filename.split(".")[-1] =~ /jpg|jpeg|png|gif|bmp/
		  size = file.size <= 2*1024*1024 #小于2M
		  format&&size
		end
  end
  
  def self.upload_logo(hash)
    path= "/#{hash[:id]}/logo"
    FileUtils.mkdir_p "#{UserPath}#{path}"
    original_type = hash[:uploaded_logo].original_filename.split(".")[-1]
    basename = File.basename(hash[:uploaded_logo].original_filename,".*")
    
    _now = Time.now.strftime("%Y%m%d%H%M%S")
    _path = "/#{UserPath.split("/")[-2..-1].join("/")}"
    
    logo_name = "#{basename}"
    save_logo_path = "#{UserPath}#{path}/#{logo_name}_#{_now}.#{original_type}" 
    logo_path="#{_path}#{path}/#{logo_name}_#{_now}.#{original_type}"
     
    small_logo_name = "#{basename}_small"
    save_small_logo_path="#{UserPath}#{path}/#{small_logo_name}#{_now}.#{original_type}" 
    small_logo_path="#{_path}#{path}/#{small_logo_name}#{_now}.#{original_type}" 
     
    medium_logo_name = "#{basename}_medium"
    save_medium_logo_path="#{UserPath}#{path}/#{medium_logo_name}#{_now}.#{original_type}"
    medium_logo_path="#{_path}#{path}/#{medium_logo_name}#{_now}.#{original_type}"
    
    large_logo_name = "#{basename}_large"
    save_large_logo_path = "#{UserPath}#{path}/#{large_logo_name}#{_now}.#{original_type}"
    large_logo_path = "#{_path}#{path}/#{large_logo_name}#{_now}.#{original_type}"
    
    img = Magick::Image.from_blob(hash[:uploaded_logo].read)[0]
    img.write(save_logo_path)
    
		thumbnail = img.resize_to_fill(50, 50)
		thumbnail.write(save_small_logo_path)
		 
		thumbnail = img.resize_to_fill(120, 120)
		thumbnail.write(save_medium_logo_path)
		 
		thumbnail = img.resize_to_fill(180, 180)
		thumbnail.write(save_large_logo_path)
		[logo_name,logo_path,small_logo_path,medium_logo_path,large_logo_path]
  end
  
  private

  def password_must_be_present
    errors.add(:password, "Missing password") unless encrypted_password.present?
  end
  
  def email_unique
		 if User.find_by_email(self.email)
		   errors.add(:email,"该邮箱已经注册，请您换一个邮箱")
		 end
  end
  
  def generate_salt
    self.salt = self.object_id.to_s + rand.to_s
  end
  
  def make_activation_code
    self.activation_code = self.class.make_token
  end
end
