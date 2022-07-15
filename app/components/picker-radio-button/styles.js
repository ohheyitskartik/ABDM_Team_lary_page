import { black } from '../../../colors';
import { verticalScale } from '../../../utils';

const styles = {
    list: {
        paddingVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        paddingVertical: verticalScale(8),
        paddingHorizontal: verticalScale(5),
    },
    seprator: { borderBottomWidth: 0.2, borderColor: black },
};
export default styles;
