import {HTTP, HTTPS} from '../constants'

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



  
    /**
 * Меняет HTTP на HTTPS
 * @param {String} url -url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP= (url) => {
  const result = url? url.replace(HTTP, HTTPS ) : url
  return result
  }