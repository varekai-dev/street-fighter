import { callApi } from '../helpers/apiHelper';

class FighterService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return apiResult;
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(id) {
    try {
      const endpoint = `details/fighter/${id}.json`;
      const result =  await callApi(endpoint, 'GET')
      return result
    } catch (e) {
      throw e
    }
  
   
  }
}

export const fighterService = new FighterService();
