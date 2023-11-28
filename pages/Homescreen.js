import * as React from 'react';
import { View, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';


export default function HomeScreen() {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f3ae' }}>
        <Text>Home Screen</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#edd382'}} onPress={()=>{
            Navigation.push('CreateRoutine')
        }} >
            <Text>Create Routine</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f3ae'}}>
            <Text>View Routines</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#edd382'}}>
            <Text>View Previous Workouts</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f3ae'}}>
            <Text>Workout</Text>
        </View> 

    </View>
);
}
Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
Navigation.setRoot({
    root: {
    stack: {
        children: [
        {
            component: {
            name: 'HomeScreen'
            }
        }
        ]
    }
    }
});
}
);
