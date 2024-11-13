export const numberOfItems = (items, info) => {
  const ratio = info && info.count && Math.ceil(info.count / items);
  const pages = ratio && Array.from(Array(ratio + 1).keys());
  if (pages) pages.shift();
  return ratio;
};

export const findKeyByValue = (obj, value) => {
  for (const [key, val] of Object.entries(obj)) {
    if (val === value) {
      return key;
    }
  }
  return null; 
};
export const peopleTypeOfFilter = {
  status:['Dead', 'Alive', 'Unknown'],
  gender: ['Male, Female, Unknown'],
  species: ['Alien', 'Human', 'Unknown']
  

}