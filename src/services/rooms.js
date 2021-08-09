import http from "../http-common";
import moment from 'moment';

class RoomDataService {
get() {
    return http.get(`rooms`)
}
}

export default new RoomDataService();