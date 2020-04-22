import chalk from 'chalk';

export const log = (...args) => console.log(chalk.green('[LOG]: ', ...args));

export const error = (...args) =>
  console.log(chalk.bgRed('[ERROR]: ', ...args));
