import http from "../http-common";
import moment from 'moment';

class RollUpDataService {
get(selectedDate, selectedRoom) {
    var newdate = moment(selectedDate).format("yyyy-MM-DD");
    return http.get(`rollup?Room=${selectedRoom}&Date=${newdate}`)
}
}

export default new RollUpDataService();