import React from 'react'
import {Navigation} from 'react-native-navigation'
export default function CreateRoutine() {
  return (
    <div>CreateRoutine</div>
  )
}
Navigation.registerComponent('CreateRoutine', () => CreateRoutine);
