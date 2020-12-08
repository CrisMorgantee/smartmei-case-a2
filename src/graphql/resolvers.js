const axios = require('axios');

const localeFromCep = async (cepNumber) => {
  try {
     const response = await axios.get(`https://viacep.com.br/ws/${cepNumber}/json/`).then(locale => locale)
     return response.data
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  Query: {
    getLocaleByCep: (_, args) => {
      const locale = localeFromCep(args.cep)
      
      return locale
    },
  },
};

