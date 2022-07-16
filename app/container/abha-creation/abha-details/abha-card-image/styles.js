import { StyleSheet } from 'react-native';
import { black, blueberry, white } from '../../../../../colors';
import { scale, verticalScale } from '../../../../../utils';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        flexDirection: 'row',
        height: verticalScale(200),
    },
    card: {
        width: '80%',
        height: verticalScale(150),
        shadowColor: black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        padding: scale(10),
        backgroundColor: white,
        borderRadius: 15,
    },
    text: { marginVertical: 10, fontSize: 16 },
});

export default styles;
