
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/LoginPage';
import { RegistrationScreen } from './screens/Registration';
import { Home } from './screens/Home';
import { ServiceProviderHome } from './screens/ServiceProviderHome';
import { RegistrationPage2 } from './screens/RegistrationPage2';
import { CreateProfile } from './screens/CreateProfile';
import { Architecture } from './screens/Architecture';
import { CivilEngineer } from './screens/Civil-Engineer';
import { Electrician } from './screens/Electrician';
import { Plumber } from './screens/Plumber.';
import { Painter } from './screens/Painter';
import { Carpenter } from './screens/Carpenter';
import { Glazier } from './screens/Glazier';
import { MarbleSetters } from './screens/MarbleSetters';
import { CeilingInstaller } from './screens/CeilingInstaller';
import { Splashscreen } from './screens/splashscreen';
import { Sp_CreateProfile } from './screens/Sp_CreateProfile';
import { Sp_CreateProfile2 } from './screens/Sp_CreateProfile2';
import {CreateJob} from './screens/CreateJob';
import { Description } from './screens/Description';
import { EditPosts } from './screens/EditPosts';
import { EditServices } from './screens/EditServices';
import { GigsDescription } from './screens/GigsDescription';
import { Orders } from './screens/Orders';
import { Review } from './screens/Review';
import { SpSchedule } from './screens/SpSchedule';
import { SpScheduleDisplay } from './screens/SpScheduleDisplay';
import { HiringDescription } from './screens/HiringDescription';
import { HiringReqResponse } from './screens/HiringReqResponse';
import { MaterialProvider } from './screens/MaterialProvider';
import {Cement} from  './screens/Materials/Cement'; 
import {Sand} from  './screens/Materials/Sand'; 
import {Steel} from  './screens/Materials/Steel'; 
import {Concrete} from  './screens/Materials/Concrete'; 
import {Glass} from  './screens/Materials/Glass'; 
import {Wood} from  './screens/Materials/Wood'; 
import {Brick} from  './screens/Materials/Brick'; 
import {Stone} from  './screens/Materials/Stone'; 
import {Ceiling} from  './screens/Materials/Ceiling'; 
import {Tiles} from  './screens/Materials/Tiles'; 
import {Marble} from  './screens/Materials/Marble'; 
import {Windows} from  './screens/Materials/Windows'; 
import { CementDescription } from './screens/Materials/CementDescription';
import { SandDescription } from './screens/Materials/SandDescription';
import {chat} from './screens/chat';
import { ConstructionCompany } from './screens/ConstructionCompany';
import { MainChat } from './screens/MainChat';
import { cart } from './screens/Materials/cart';
import { checkout } from './screens/Materials/checkout';
import { payment } from './screens/Materials/payment';
import { ServiceChat } from './screens/ServiceChat';
import { ClientOrders } from './screens/ClientOrders';
import { ClientScreen } from './screens/ClientScreen';
import { SpScreen } from './screens/SpScreen';
import { MaterialOrdersInfo } from './screens/MaterialOrdersInfo';
import { ServiceChat2 } from './screens/ServiceChat2';
import {ClientChat} from './screens/ClientChat'
import {ClientChat2} from './screens/ClientChat2'


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splashscreen'>
        <Stack.Screen name='Splashscreen' component={Splashscreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Registration" component={RegistrationScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
        <Stack.Screen name="serviceProviderHome" component={ServiceProviderHome}  options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="RegistrationPage2" component={RegistrationPage2}  options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="CreateProfile" component={CreateProfile}  options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Sp_CreateProfile' component={Sp_CreateProfile} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name="Architecture" component={Architecture}  options={{headerShown:false}} />
        <Stack.Screen name="CivilEngineer" component={CivilEngineer}  options={{headerShown:false}}/>
        <Stack.Screen name="Plumber" component={Plumber}  options={{headerShown:false}}/>
        <Stack.Screen name="Electrician" component={Electrician}  options={{headerShown:false}}/>
        <Stack.Screen name="Painter" component={Painter}  options={{headerShown:false}}/>
        <Stack.Screen name="Carpenter" component={Carpenter}  options={{headerShown:false}}/>
        <Stack.Screen name="Glazier" component={Glazier}  options={{headerShown:false}}/>
        <Stack.Screen name="MarbleSetters" component={MarbleSetters}  options={{headerShown:false}}/>
        <Stack.Screen name="CeilingInstaller" component={CeilingInstaller}  options={{headerShown:false}}/>
        <Stack.Screen name="Sp_CreateProfile2" component={Sp_CreateProfile2}  options={{headerShown:false}}/>
        <Stack.Screen name="CreateJob" component={CreateJob}  options={{headerShown:false}}/>
        <Stack.Screen name="Description" component={Description}  options={{headerShown:false}}/>
        <Stack.Screen name="EditPosts" component={EditPosts}  options={{headerShown:false}}/>
        <Stack.Screen name="EditServices" component={EditServices}  options={{headerShown:false}}/>
        <Stack.Screen name="GigsDescription" component={GigsDescription}  options={{headerShown:false}}/>
        <Stack.Screen name="Orders" component={Orders}  options={{headerShown:false}}/>
        <Stack.Screen name="Review" component={Review}  options={{headerShown:false}}/>
        <Stack.Screen name="SpSchedule" component={SpSchedule}  options={{headerShown:false}}/>
        <Stack.Screen name="SpScheduleDisplay" component={SpScheduleDisplay}  options={{headerShown:false}}/>
        <Stack.Screen name="HiringDescription" component={HiringDescription}  options={{headerShown:false}}/>
        <Stack.Screen name="HiringReqResponse" component={HiringReqResponse}  options={{headerShown:false}}/>
        <Stack.Screen name="MaterialProvider" component={MaterialProvider}  options={{headerShown:false}}/>
        <Stack.Screen name="Cement" component={Cement}  options={{headerShown:false}}/>
        <Stack.Screen name="Sand" component={Sand}  options={{headerShown:false}}/>
        <Stack.Screen name="Steel" component={Steel}  options={{headerShown:false}}/>
        <Stack.Screen name="Concrete" component={Concrete}  options={{headerShown:false}}/>
        <Stack.Screen name="Glass" component={Glass}  options={{headerShown:false}}/>
        <Stack.Screen name="Wood" component={Wood}  options={{headerShown:false}}/>
        <Stack.Screen name="Brick" component={Brick}  options={{headerShown:false}}/>
        <Stack.Screen name="Stone" component={Stone}  options={{headerShown:false}}/>
        <Stack.Screen name="Ceiling" component={Ceiling}  options={{headerShown:false}}/>
        <Stack.Screen name="Tiles" component={Tiles}  options={{headerShown:false}}/>
        <Stack.Screen name="Marble" component={Marble}  options={{headerShown:false}}/>
        <Stack.Screen name="Windows" component={Windows}  options={{headerShown:false}}/>
        <Stack.Screen name="CementDescription" component={CementDescription}  options={{headerShown:false}}/>
        <Stack.Screen name="SandDescription" component={SandDescription}  options={{headerShown:false}}/>
        <Stack.Screen name="chat" component={chat}  options={{headerShown:false}}/>
        <Stack.Screen name="ConstructionCompany" component={ConstructionCompany}  options={{headerShown:false}}/>
        <Stack.Screen name="MainChat" component={MainChat}  options={{headerShown:false}}/>
        <Stack.Screen name="cart" component={cart}  options={{headerShown:false}}/>
        <Stack.Screen name="checkout" component={checkout}  options={{headerShown:false}}/>
        <Stack.Screen name="payment" component={payment}  options={{headerShown:false}}/>
        <Stack.Screen name="ServiceChat" component={ServiceChat}  options={{headerShown:false}}/>
        <Stack.Screen name="ClientOrders" component={ClientOrders}  options={{headerShown:false}}/>
        <Stack.Screen name="ClientScreen" component={ClientScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="SpScreen" component={SpScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="MaterialOrdersInfo" component={MaterialOrdersInfo}  options={{headerShown:false}}/>
        <Stack.Screen name="ServiceChat2" component={ServiceChat2}  options={{headerShown:false}}/>
        <Stack.Screen name="ClientChat" component={ClientChat}  options={{headerShown:false}}/>
        <Stack.Screen name="ClientChat2" component={ClientChat2}  options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}