import { StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { white } from '../../../colors';
import { scale, verticalScale } from '../../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SafeAreaInsetsContext.top,
    },
    contentContainer: {
        padding: 15,
        backgroundColor: white,
    },
});

export default styles;
