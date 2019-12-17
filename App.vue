<template>
  <app-navigator></app-navigator>
</template>

<script>
  import {
    createAppContainer,
    createStackNavigator
  } from "vue-native-router";

  import AddScreen from './src/screens/AddContact'
  import EditScreen from './src/screens/EditContact'
  import MainScreen from './src/screens/Main'

  const StackNavigator = createStackNavigator(
          {
            Add: AddScreen,
            Edit: EditScreen,
            Main: MainScreen
          },
          {
            initialRouteName: 'Main',
          }
  );

  const AppNavigator = createAppContainer(StackNavigator);

  export default {
    components: { AppNavigator },
  }
</script>
