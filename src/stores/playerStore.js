import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {

    state: () => ({
        favorites: []
    }),

    actions: {

        addPlayer(player) {
            this.favorites.push(player)
        }

    }

})
