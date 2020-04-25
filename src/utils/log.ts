import chalk from 'chalk';

export const log = (...args: string[]) =>
  console.log(chalk.green('[LOG]: ', ...args));

export const error = (...args: string[]) =>
  console.log(chalk.bgRed('[ERROR]: ', ...args));
