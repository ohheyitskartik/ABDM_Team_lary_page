import { StyleSheet } from 'react-native';
import { white } from '../../../../../../colors';
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
        borderColor: '#1e91a3',
    },
    selectedGenderBox: {
        backgroundColor: '#1e91a3',
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(20),
        borderRadius: scale(12),
    },
});
