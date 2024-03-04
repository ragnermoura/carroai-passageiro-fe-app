import 'react-native-gesture-handler'
import { Feather, SimpleLineIcons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import User from '../../assets/images/user.png';

import Home from '../screens/flow/home';

const Drawer = createDrawerNavigator();

export default () => {
    return(
        
            <Drawer.Navigator 
                screenOptions={{
                    drawerStyle:{
                        backgroundColor: "#fff",
                        width: 250,
                    },
                    headerStyle:{
                        backgroundColor: "#f4511e",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle:{
                        fontWeight: 'bold'
                    },
                    drawerActiveTintColor: "blue",
                    drawerLabelStyle:{
                        color: "#111"
                    }
                }}            
            >
                <Drawer.Screen 
                    name='Home'
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home',
                        drawerIcon: () => (
                            <SimpleLineIcons name='home' size={20} color="#808080" />
                        )
                    }}
                    
                    component={Home}
                />
                    

            </Drawer.Navigator>
       
    )
}