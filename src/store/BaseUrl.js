import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: `http://api.controlemaboite.fr/api/`,
	/* other custom settings */
});

export default axiosInstance;
