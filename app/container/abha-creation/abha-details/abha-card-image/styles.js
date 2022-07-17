import { StyleSheet } from 'react-native';
import { white } from '../../../../../colors';
import { scale, verticalScale } from '../../../../../utils';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: scale(20),
        flexDirection: 'row',
        marginVertical: 10,
    },
    card: {
        width: '80%',
        height: verticalScale(300),
        padding: scale(10),
        backgroundColor: white,
        borderRadius: 15,
    },
    text: { marginVertical: 10, fontSize: 16 },
});

export default styles;
