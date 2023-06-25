import data from './zh.json';

function flattenJson(data: object, prefix: string, res: object) {
  for (const k in data) {
    const newPrefix = prefix !== '' ? prefix + '.' + k : k;
    if (typeof data[k] === 'object') flattenJson(data[k], newPrefix, res);
    else res[newPrefix] = data[k];
  }
  return res;
}
const newData = flattenJson(data, '', {});

export const t = (k: string) => newData[k];
