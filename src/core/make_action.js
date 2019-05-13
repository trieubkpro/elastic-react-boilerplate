import _ from 'lodash';

export const makeAction = (type, ...argNames) => (...args) => {
  let action = { type };

  argNames.forEach((arg, index) => action[argNames[index]] = args[index]);

  return action;
};

export const makeAsyncActions = (types, actionName) =>
  _.fromPairs(
    [['request', 'payload'], ['success', 'data'], ['error', 'errors'],].map(
      e => [
        _.camelCase(`${actionName}_${e[0]}`),
        makeAction(types[_.toUpper(`${actionName}_${e[0]}`)], e[1])
      ]
    )
  )