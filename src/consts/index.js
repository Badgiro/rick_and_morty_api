export const RAM_ROOT = "https://rickandmortyapi.com/api";
export const RAM_CHARACTERS = "/character"
export const RAM_LOCATIONS = "/location"
export const RAM_EPISODES = "/episode"


  export const characters= RAM_ROOT+RAM_CHARACTERS
  export const locations= RAM_ROOT+RAM_LOCATIONS
  export const episodes= RAM_ROOT+RAM_EPISODES


export async function fetchData(url) {
  if (!url) {
    throw new Error(
      `Invalid type. Available types are: characters, locations, episodes.`
    );
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching ${url}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}


