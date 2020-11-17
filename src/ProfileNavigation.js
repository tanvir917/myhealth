import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Header from './components/Doctors/Header'
import AboutDoctor from './screens/doctors/AboutDoctor'
import Chamber from './screens/doctors/Chamber'
import Post from './screens/doctors/Post'

const TabNavigator = createMaterialTopTabNavigator(
    {
      AboutDoctor: AboutDoctor,
      Chamber: Chamber,
      Post: Post,
    },
    {
      tabBarComponent: Header,
      tabBarOptions: {
        activeTintColor: "#1BA1F3",
        inactiveTintColor: "#000"
      },
      initialRouteName: "AboutDoctor"
    }
  );
  
  const ProfileNavigation = createAppContainer(TabNavigator);
  
  export default ProfileNavigation;