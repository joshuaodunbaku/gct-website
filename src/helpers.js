const hyphenToSpace = (string) => {
  return string.replace(/-/g, " ");
};

const spaceToHypen = (string) => {
  return string.replace(/ /g, "-");
};

export { hyphenToSpace, spaceToHypen };
