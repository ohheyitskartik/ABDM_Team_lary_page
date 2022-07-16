import { StyleSheet } from 'react-native';
import { scale, verticalScale, width } from '../../../utils';
import { colorCongratsRelation } from '../../../colors';

export const baseWidth = 1100;

export default StyleSheet.create({
    menuOptions: {
        paddingHorizontal: scale(12),
        paddingVertical: verticalScale(17),
        borderRadius: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOpacity: 0.2,
        elevation: 2,
        alignSelf: 'flex-start',
        marginRight: scale(12),
    },
    menuStyle: {
        borderRadius: scale(10),
        width: scale(baseWidth * 0.3),
        maxHeight: scale(180),
    },
    innerBox: {
        maxHeight: scale(200),
    },
    option: {
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(20),
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        letterSpacing: 1.5,
        width: '60%',
    },
    relationContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box: {
        flexDirection: 'row',
        borderColor: colorCongratsRelation,
        borderWidth: 1,
        paddingHorizontal: scale(12),
        borderRadius: scale(8),
    },
    boxLabel: {
        justifyContent: 'center',
        minWidth: width - scale(80),
    },
});
