import inquirer from 'inquirer';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const inquireLoginData = () =>
  inquirer.prompt<LoginCredentials>([
    {
      name: 'email',
      message: 'Your Email',
      validate: (value: string) => EMAIL_REGEX.test(value) || 'Invalid email',
    },
    {
      name: 'password',
      message: 'Your Password',
      type: 'password',
    },
  ]);

export default inquireLoginData;
