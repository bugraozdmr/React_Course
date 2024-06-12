import axios from 'axios';


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID -y1vtXb2eN-2q1QkqIC1qLhOQ3D3cGFGK2Kr-yPZtqM'
      },
      params:{
        query:term
      }
    })
    //debugger;
    // dönen içinden gerekli olanı çekme
    return response.data.results;
  }

export default searchImages;