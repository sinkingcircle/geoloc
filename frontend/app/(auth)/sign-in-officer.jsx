import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFieldOfficer from '../../components/FormFieldOfficer'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="mt-20 px-4 flex justify-center">
          <FormFieldOfficer/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
