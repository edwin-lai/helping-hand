class User < ActiveRecord::Base
  validates :password_digest, :first_name, :last_name, :bank, presence: :true
  validates :email, :session_token, uniqueness: :true, presence: :true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token, :default_bank

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil unless user && user.password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def default_bank
    self.bank ||= 500
  end
end
