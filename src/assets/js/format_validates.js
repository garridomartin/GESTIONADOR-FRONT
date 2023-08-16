function formatValidate(country, data_type) {
    // THIS FUNCTION IS USED TO VALIDATE DATA FROM FORMS
  
    const COUNTRY_FORMAS = {
      any: {
        identity_document: data => /^[a-zA-Z0-9]{8,20}$/.test(data),
        phone: data => /^[0-9]{7,15}$/.test(data),
        telf: data => /^[0-9]{7,15}$/.test(data),
        email: data => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/.test(data),
        password: data => /^[a-zA-Z0-9_.+-]{6,64}$/.test(data),
        minmax8_36: data => data.length >= 8 && data.length <= 36,
        minmax6_36: data => data.length >= 6 && data.length <= 36,
        minmax6_50: data => data.length >= 6 && data.length <= 50,
        minmax3_50: data => data.length >= 3 && data.length <= 50,
        minmax3_100: data => data.length >= 3 && data.length <= 100,
        minmax3_150: data => data.length >= 3 && data.length <= 150,
        minmax3_200: data => data.length >= 3 && data.length <= 200,
        none: data => true
      }
    };
  
    return COUNTRY_FORMAS[country][data_type];
  }
  
export default formatValidate;