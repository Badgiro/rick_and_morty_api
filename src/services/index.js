export const numberOfItems = (items, info) => {
  const ratio = info && info.count && Math.ceil(info.count / items);
  const pages = ratio && Array.from(Array(ratio + 1).keys());
  if (pages) pages.shift();
  return ratio;
};