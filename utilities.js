/*
  Input: A well-formed string - no special characters, capitalization, excess whitespace etc.
    e.g. "the quick brown fox and the quick blue hare"
  Output: A histogram of bigram frequencies.
*/
const buildHistogram = wfString => {
  const words = wfString.split(' ');
  return words.slice(1).reduce((acc,e,i,a) => {
    const pair = `${words[i]} ${a[i]}`;
    acc[pair] = acc[pair] ? ++acc[pair] : 1;
    return acc;
  }, {});
};

module.exports = {
  buildHistogram
};