import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MenuProvider } from 'react-native-popup-menu';
import Auth from './app/auth';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: (failureCount, error) => {
                if (error.status === 404) return false;
                if (failureCount < 3) return true;
                return false;
            },
        },
    },
});

const App = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'transparent', flex: 1 }}>
            <MenuProvider>
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer initialRouteName="Home">
                        <Auth />
                    </NavigationContainer>
                </QueryClientProvider>
            </MenuProvider>
        </SafeAreaView>
    );
};

export default App;
