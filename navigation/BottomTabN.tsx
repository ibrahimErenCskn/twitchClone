import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FallowScreen from '../screens/FallowScreen';
import { AntDesign,Feather,FontAwesome5 ,Entypo  } from '@expo/vector-icons';
import { Image, View } from 'react-native';


const Tab = createBottomTabNavigator();

function BottomTabN() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FallowScreen" component={FallowScreen} options={{tabBarIcon:({focused})=><AntDesign name="hearto" size={22} color={focused ?'blue':'gray'} />,
      headerLeft:()=> <Image source={require('../assets/Images/pp-online.png')} style={{marginLeft:8}}/>,
      headerRight:()=>(
        <View style={{flexDirection:'row', gap:12,marginRight:8}}>
            <AntDesign name="videocamera" size={24} color="black" />
            <Feather name="inbox" size={24} color="black" />
            <Feather name="message-square" size={24} color="black" />
            <Feather name="heart" size={24} color="black" />
        </View>
      ),
      headerTitle:''
    }}/>
      <Tab.Screen name="Naber" component={FallowScreen} options={{tabBarIcon:({focused})=><FontAwesome5 name="compass" size={22} color={focused ?'blue':'gray'} />}}/>
      <Tab.Screen name="Iydir" component={FallowScreen} options={{tabBarIcon:({focused})=><Entypo name="document" size={22} color={focused ?'blue':'gray'} />}}/>
    </Tab.Navigator>
  );
}

export default BottomTabN