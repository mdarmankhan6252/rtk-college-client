import axios from 'axios'

const axiosPublic = axios.create({
   baseURL: 'https://rtk-college-server.vercel.app'
})

const useAxiosPublic = () => {
   return axiosPublic
};

export default useAxiosPublic;