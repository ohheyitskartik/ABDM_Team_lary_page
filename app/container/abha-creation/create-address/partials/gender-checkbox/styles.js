import { StyleSheet } from 'react-native';
import { blueberry, brandDark, white } from '../../../../../../colors';
import { scale, verticalScale } from '../../../../../../utils';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    genderBox: {
        backgroundColor: white,
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(20),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: blueberry,
    },
    selectedGenderBox: {
        backgroundColor: brandDark,
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(20),
        borderRadius: scale(12),
    },
});
