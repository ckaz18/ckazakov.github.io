require('dotenv').config();


function getEnvVariable(key:string) {
  return process.env[key];
}

export const envVariable = {
  email: getEnvVariable('NEXT_PUBLIC_EMAIL') || '',
  phone: getEnvVariable('NEXT_PUBLIC_PHONENUMBER') || '',
  linkedIn: getEnvVariable('NEXT_PUBLIC_LINKEDIN') || '',
  github: getEnvVariable('NEXT_PUBLIC_GITHUB') || '',
};