import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    colour: string;
}){
    return <FontAwesome size={24} {...props} style={{ color: '#1BC464' }}/>;
}

const TabsLayout = () => {
    return (
        <SafeAreaView style ={styles.safeArea}>
            <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#1BC464',
                tabBarInactiveBackgroundColor: 'gray',
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                },
                headerShown: false,
            }}>
                <Tabs.Screen name="index" options={{
                    title: 'shop',
                    tabBarIcon(props){
                        return <TabBarIcon colour={"#1BC464"} {...props} name="shopping-cart"/>;
                    }
                }}/>
                <Tabs.Screen name="orders" options={{
                    title: 'orders',
                    tabBarIcon(props){
                        return <TabBarIcon colour={"#1BC464"} {...props} name="book"/>;
                    }
                }}/>
            </Tabs>
    </SafeAreaView>
    );
}

export default TabsLayout;

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
    }
});