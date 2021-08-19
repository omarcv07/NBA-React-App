import axios from "axios"
import { BASE_URL } from '../Utils/Utils';

export const getNbaPlayers = async () => {
    const response = await axios.get(BASE_URL);

    return response.data.values
}