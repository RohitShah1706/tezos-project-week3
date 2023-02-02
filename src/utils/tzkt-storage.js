// ! fetch the storage of the contract DVOTE
import axios from "axios";
export const fetchStorage = async () => {
    console.log("url", `https://api.ghostnet.tzkt.io/v1/contracts/${process.env.REACT_APP_DVOTE_CONTRACT_ADDRESS}/storage`)
    const res = await axios.get(
        `https://api.ghostnet.tzkt.io/v1/contracts/${process.env.REACT_APP_DVOTE_CONTRACT_ADDRESS}/storage`
    )
    return res.data;
}