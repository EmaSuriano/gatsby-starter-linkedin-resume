import inquirer from 'inquirer';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const inquireLoginData = async () => {
  const { email, password } = await inquirer.prompt([
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
  return { email, password };
};

export default inquireLoginData;
