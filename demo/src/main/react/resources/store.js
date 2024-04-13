import { create } from 'zustand'
import axios from 'axios';

export const useStore = create((set, get) => ({
    xkcdCurrentComic: {},
    xkcdPastComic: {},
    userDefComicNum: '',
    randomComicNum: Math.floor(Math.random() * 2500),
    setUserDefComicNum: (userInputComicNum) => set({ userDefComicNum: userInputComicNum }),
    setRandomComicNum: () => set({ randomComicNum: Math.floor(Math.random() * 2500) }),
    fetchCurrentComic: async () => {
        await axios.get('/xkcd/current')
            .then(function (response) {
                set({ xkcdCurrentComic: response.data })
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    fetchPastComic: async (pastNum) => {
        const count = pastNum || get().randomComicNum
        axios.get(`/xkcd/past/${count}`)
            .then(function (response) {
                set({ xkcdPastComic: response.data })
                set({ userDefComicNum: "" })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
}))

