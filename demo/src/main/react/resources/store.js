import { create } from 'zustand'
import axios from 'axios';

export const useStore = create((set) => ({
    xkcdCurrentComic: {},
    xkcdPastComic: {},
    // updateCurrent: (current) => set({ xkcdCurrentComic: current }),
    fetchCurrentComic: async () => {
        axios.get('/xkcd/current')
            .then(function (response) {
                set({ xkcdCurrentComic: response.data })
                // handle success
                // console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

}))

