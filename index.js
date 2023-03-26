function saturdayFun(doing = "roller-skate") {
  return `This Saturday, I want to ${doing}!`;
}

const mondayWork = function (doing = "go to the office") {
  return `This Monday, I will ${doing}.`;
};

function wrapAdjective(flair = "*") {
  const innerFunction = function (param = "special") {
    return `You are ${flair}${param}${flair}!`;
  };
  return innerFunction;
}
