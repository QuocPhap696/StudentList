import  axios  from "axios"

class LocationService {

    static getAllProvinces() {
        return axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
    }

    static getAllDistricts(){
        return axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1')
    }

    static getAllWards(){
        return axios.get('https://vn-public-apis.fpo.vn/wards/getAll?limit=-1')
    }
}
export default LocationService;
