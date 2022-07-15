import moment from 'moment';
import _ from 'lodash';

export const months = moment.monthsShort();
export const days = _.range(1, 32);

export const getYearList = maximumDate => {
    const minYear = moment().year() - 120;
    if (maximumDate) {
        const year = moment(maximumDate).format('YYYY');
        const maxYear = year ? parseInt(year, 10) : 2100;
        return _.range(maxYear, minYear, -1);
    }
    return _.range(2100, minYear, -1);
};

export const getDefaulDate = defaultDate => {
    if (defaultDate) {
        const defaultDay = moment(defaultDate).format('D');
        const defaultMonth = moment(defaultDate).format('MMM');
        const defaultYear = moment(defaultDate).format('YYYY');
        return { day: defaultDay, month: defaultMonth, year: defaultYear };
    }
    return { day: '', month: '', year: '' };
};
