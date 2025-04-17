'use strict';

/*
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const arr = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        currentState = { ...currentState, ...action.extraData };
        arr.push({ ...currentState });
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        arr.push({ ...currentState });
        break;

      case 'clear':
        currentState = {};
        arr.push({ ...currentState });
        break;
    }
  }

  return arr;
}
module.exports = transformStateWithClones;
