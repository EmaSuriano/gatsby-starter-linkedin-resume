import fs from 'fs';

export const saveJson = (path: string, json: Object) =>
  fs.writeFileSync(path, JSON.stringify(json, null, 2));

export const readJson = (path: string) => {
  if (fs.existsSync(path)) return null;

  return JSON.parse(fs.readFileSync(path).toString());
};
