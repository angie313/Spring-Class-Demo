import { create } from 'zustand'
import axios from 'axios';
import moment from 'moment';

const currentDate = moment().format('YYYY-MM-DD');

export const nasaStore = create((set) => ({
    todayNasaApod: {},
    responseErr: {},
    pastApod: [],
    userSelectDate: currentDate,
    userInputCount: 1,
    userInputStartDate: currentDate,
    userInputEndDate: currentDate,
    setUserInputCount: (userInput) => set({ userInputCount: userInput }),
    setUserSelectDate: (userInput) => set({ userSelectDate: userInput }),
    setUserInputStartDate: (userInput) => set({ userInputStartDate: userInput }),
    setUserInputEndDate: (userInput) => set({ userInputEndDate: userInput }),
    fetchApod: async (param) => {
        axios.get('/nasa/apod', {
            params: param
        })
            .then(function (response) {
                param == null ? set({ todayNasaApod: response.data[0] }) : set({ pastApod: response.data })
            })
            .catch(function (error) {
                set({ responseErr: error.response.data })
            })
    },
}))

