import { Tabs } from "expo-router";

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle:{
          backgroundColor: "#4e5f8b"
        },
        headerTintColor:"#fff",
        headerTitleStyle:{
          fontWeight:"bold"
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home"
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil"
        }}
      />

      <Tabs.Screen
        name="Histórico"
        options={{
          title: "Histórico"
        }}
      />
    </Tabs>
  );
}