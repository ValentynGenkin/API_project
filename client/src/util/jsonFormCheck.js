import { removeLastComma } from './removeLastComma';

export const jsonForCheck = (schemaData) => {
  if (Array.isArray(schemaData)) {
    const jsonText = JSON.parse(`{${removeLastComma(schemaData.join(''))}}`);

    return JSON.stringify(jsonText, null, 2);
  }
};
