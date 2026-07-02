import axios from "axios";

const api = axios.create({
    baseURL: "https://footballplayers.onrender.com"
});

const footballService = {

    async getPlayers(){
      const players=await api.get("/players");
      return players.data
    },
    async getPlayer(id){
      const players=await api.get(`/players/${id}`);
      return players.data
    },
    async deletePlayer(id){
      const player=await api.delete(`/players/${id}`);
      return player.data
    },
    async addPlayer(player){
      const players=await api.post("/players",player);
      return players.data
    },
    async updatePlayer(id,player){
      const players=await api.put(`/players/${id}`,player);
      return players.data

    }

}

export default footballService;
