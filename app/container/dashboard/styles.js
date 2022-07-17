import { StyleSheet } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { verticalScale } from '../../../utils';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SafeAreaInsetsContext.top,
    },
    contentContainer: {
        padding: 15,
        flex: 1,
    },
});

export default styles;
