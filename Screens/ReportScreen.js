import React, { useState,useCallback } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';
import { AccountInput } from '../Components/AccountInput';
import { PrimaryButton } from '../Components/PrimaryButton';
import {usePostReportQuery} from '../api/apiSlice'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { parsePhoneNumber } from 'libphonenumber-js';

export function ReportScreen () {
  const { t } = useTranslation()

  // data

  const [ UserName, setUserName ] = useState('')
  const [ UserPhoneNumber, setUserPhoneNumber ] = useState('')
  const [ UserEmail, setUserEmail ] = useState('')
  const [ ReportMessage, setReportMessage] = useState('')
  
  // errors 
  const [ UserNameError, setUserNameError ] = useState(false)
  const [ UserPhoneNumberError, setUserPhoneNumberError ] = useState(false)
  const [ UserEmailError, setUserEmailError ] = useState(false)
  const [ ReportMessageError, setReportMessageError] = useState(false)

  const Navigation = useNavigation()

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    try {
      const phoneNumberParsed = parsePhoneNumber(phoneNumber);
      if (phoneNumberParsed.isValid()) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user_name: UserName,
      user_phone: UserPhoneNumber,
      user_email: UserEmail,
      user_report: ReportMessage
    })
  };

  const postData = async () => {
    try {
        await fetch(
            'http://oralbekov.dias19.fvds.ru/api/report/send', requestOptions)
            .then(response => {
                response.json()
                    .then(data => {
                      if(response.ok){
                        Navigation.navigate('AccountReportSuccess')
                      } else {
                        alert('Ошибка, попробуйте позже')
                      }
                    });
            })
    }
    catch (error) {
        console.error(error);
        alert('Ошибка, попробуйте позже')
    }
  }

  const { data, isLoading, isError, error } = postData;

  
  const handleSubmit = useCallback(() => {
    if (validatePhoneNumber(UserPhoneNumber) && validateEmail(UserEmail) && UserName.length > 1 && ReportMessage.length > 10) {
      postData()
    } else {
      if (!validatePhoneNumber(UserPhoneNumber)) {
        setUserPhoneNumberError(true)
      } else {
        setUserPhoneNumberError(false)
      }
      if (!validateEmail(UserEmail)) {
        setUserEmailError(true)
      } else {
        setUserEmailError(false)
      }
      if (UserName.length < 2) {
        setUserNameError(true)
      } else {
        setUserNameError(false)
      }
      if (ReportMessage.length < 10) {
        setReportMessageError(true)
      } else {
        setReportMessageError(false)
      }
    }

  });

  return (
    <View style={styles.Container}>
      <AccountInput label={t('report_a_bug_input_title_name')} 
        error={UserNameError}
        placeholder='' 
        keyboardType="default"
        value={UserName}
        onChangeText={(value) => setUserName(value)}
        />

      <AccountInput label={t('report_a_bug_input_title_phone_number')} 
        error={UserPhoneNumberError}
        placeholder='+7 ..' 
        keyboardType="default"
        value={UserPhoneNumber}
        onChangeText={(value) => setUserPhoneNumber(value)}
        />

      <AccountInput label={t('report_a_bug_input_title_email')} 
        error={UserEmailError}
        placeholder='example@mail.com' 
        keyboardType="default"
        value={UserEmail}
        onChangeText={(value) => setUserEmail(value)}
        />

      <AccountInput label={t('report_a_bug_input_title_message')}
        error={ReportMessageError}
        placeholder={t('report_a_bug_input_message_placeholder')} 
        keyboardType="default" 
        type='Report'
        value={ReportMessage}
        onChangeText={(value) => setReportMessage(value)}
        numberOfLines={2}
        />
      
      {UserNameError || UserPhoneNumberError || UserEmailError || ReportMessageError ? 
        <View style={styles.errorContainer}>
          <Image style={{height:32,width:32}} source={require('../assets/Icons/WarningOctagonRed.png')}/>
          <Text style={styles.errorText}>{t('valid_error')}</Text>
        </View> : null}

      <PrimaryButton 
        text={t('button_send_data')}
        onPress={handleSubmit}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    marginTop: 24,
    marginHorizontal: '6%'
  },
  errorContainer:{
    flexDirection:'row',
    marginBottom:20,
  },
  errorText:{
    fontSize:12,
    marginLeft:10,
    fontWeight:'500'
  }
});
