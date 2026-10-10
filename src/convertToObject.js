'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const styles = stylesString.split(';');
  const result = {};

  for (const style of styles) {
    const separatorIndex = style.indexOf(':');

    if (separatorIndex === -1) {
      continue;
    }

    const property = style.slice(0, separatorIndex).trim();
    const value = style.slice(separatorIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
