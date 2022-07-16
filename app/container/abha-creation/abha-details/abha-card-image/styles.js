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
        padding: scale(10),
        backgroundColor: white,
        borderRadius: 15,
    },
    text: { marginVertical: 10, fontSize: 16 },
});

export default styles;
