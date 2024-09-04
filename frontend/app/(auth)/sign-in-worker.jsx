import { ScrollView, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormFieldWorker from '../../components/FormFieldWorker'

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className=" mt-20 px-4 flex justify-center">
          <FormFieldWorker/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
