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
  
  