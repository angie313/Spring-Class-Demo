import { create } from 'zustand'
import axios from 'axios';

export const nasaStore = create((set, get) => ({
    todayNasaApod: {},
    responseErr: {},
    fetchTodayNasaApod: async () => {
        axios.get('/nasa/apod')
            .then(function (response) {
                set({ todayNasaApod: response.data[0] })
            })
            .catch(function (error) {
                console.log(error);
                set({ responseErr: error.response.data })
            })
    },
}))

