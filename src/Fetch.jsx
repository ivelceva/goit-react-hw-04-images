import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '34676679-0f1cc162f6f579de89d9fb21c';

export const getFetch = async (query, page = 1, per_page = 12) => {
  const response = await axios.get('/', {
    params: {
      page,
      per_page,
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response.data;
};
