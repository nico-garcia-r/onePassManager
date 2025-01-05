import sdk from '@1password/sdk';

const categories = {
  LOGIN: sdk.ItemCategory.Login,
  SECURE_NOTE: sdk.ItemCategory.SecureNote,
  CREDIT_CARD: sdk.ItemCategory.CreditCard,
  CRYPTO_WALLET: sdk.ItemCategory.CryptoWallet,
  IDENTITY: sdk.ItemCategory.Identity,
  PASSWORD: sdk.ItemCategory.Password,
  DOCUMENT: sdk.ItemCategory.Document,
  API_CREDENTIALS: sdk.ItemCategory.ApiCredentials,
  BANK_ACCOUNT: sdk.ItemCategory.BankAccount,
  DATABASE: sdk.ItemCategory.Database,
  DRIVER_LICENSE: sdk.ItemCategory.DriverLicense,
  EMAIL: sdk.ItemCategory.Email,
  MEDICAL_RECORD: sdk.ItemCategory.MedicalRecord,
  MEMBERSHIP: sdk.ItemCategory.Membership,
  OUTDOOR_LICENSE: sdk.ItemCategory.OutdoorLicense,
  PASSPORT: sdk.ItemCategory.Passport,
  REWARDS: sdk.ItemCategory.Rewards,
  ROUTER: sdk.ItemCategory.Router,
  SERVER: sdk.ItemCategory.Server,
  SSH_KEY: sdk.ItemCategory.SshKey,
  SOCIAL_SECURITY_NUMBER: sdk.ItemCategory.SocialSecurityNumber,
  SOFTWARE_LICENSE: sdk.ItemCategory.SoftwareLicense,
  PERSON: sdk.ItemCategory.Person,
}

const fieldTypes = {
  CONCEALED: sdk.ItemFieldType.Concealed,
  TEXT: sdk.ItemFieldType.Text,
  TOTP: sdk.ItemFieldType.Totp,
  URL: sdk.ItemFieldType.Url,
  PHONE: sdk.ItemFieldType.Phone,
  CREDIT_CARD_TYPE: sdk.ItemFieldType.CreditCardType,
  CREDIT_CARD_NUMBER: sdk.ItemFieldType.CreditCardNumber,
}

export { categories, fieldTypes };