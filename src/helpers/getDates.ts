import moment from 'moment';

export default function getDates(startDate: string, stopDate: string) {
    const dateArray = [];
    let currentDate = moment(startDate);
    const endDate = moment(stopDate);
    if (endDate !== undefined && startDate !== undefined) {
        while (currentDate <= endDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
            currentDate = moment(currentDate).add(1, 'days');
        }
    }
    return dateArray;
}
