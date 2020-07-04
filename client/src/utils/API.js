import axios from 'axios';

export default {
  submitForm: function (formData) {
    return axios.post('/api/forms', formData);
  },
};
