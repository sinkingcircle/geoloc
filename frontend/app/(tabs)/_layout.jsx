import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Tabs,Redirect, useUnstableGlobalHref } from 'expo-router'
import { icons } from '../../constants'
import { useSelector } from 'react-redux'

const TabIcon = ({icon,color,name,focused}) => {
  return (
    <View className="items-center justify-center">
      <Image
        source = {icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
        />
        <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color: color}}>
          {name}
        </Text>
    </View>
  )
}
const TabLayout = () => {
  const isOfficer = useSelector((state) => state.worker.isOfficer)
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color,focused}) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="home"
              focused={focused}
            />
            
          )
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({ color,focused}) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
          href: isOfficer? '/bookmark' : null,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color,focused}) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="create"
              focused={focused}
            />
            
          )
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: 'Track',
          headerShown: false,
          tabBarIcon: ({ color,focused}) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="track"
              focused={focused}
            />
            
          )
        }}
      />
    </Tabs>
    </>
  )
}

export default TabLayout
