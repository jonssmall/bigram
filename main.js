const placeholder = "the quick brown fox and the quick blue hare";

const buildHistogram = wfString => {
  const words = wfString.split(' ');
  return words.slice(1).reduce((acc,e,i,a) => {
    const pair = `${words[i]} ${a[i]}`;
    acc[pair] = acc[pair] ? ++acc[pair] : 1;
    return acc;
  }, {});
};

console.log(buildHistogram(placeholder));