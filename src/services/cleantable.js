import http from "../http-common";
import moment from 'moment';


class CleanTableDataService {
get(selectedDate) {
    console.log(selectedDate)
    var newdate = moment(selectedDate).format("yyyy-MM-DD");
    return http.get(`Motion?Date=${newdate}`)
}
}

export default new CleanTableDataService();