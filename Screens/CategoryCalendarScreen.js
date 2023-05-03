import React,{useState} from 'react';
import { StyleSheet, View,FlatList,Modal,Pressable,Image,Dimensions } from 'react-native';
import { StartTable } from '../Components/StartTable';
import { CalendarDate } from '../Components/CalendarDate';
import { useGetHajjStartDateQuery } from '../api/apiSlice'
import { useGetHajjDaysQuery } from '../api/apiSlice'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { NoInternet } from '../Components/NoInternet';

export default function CategoryCalendarScreen (props) {
  const {t} = useTranslation()
  const [modalVisible, setModalVisible] = useState(false);
    const {data: HajjStartDate,
      isLoading,
      isSuccess,
      isError,
      error} = useGetHajjStartDateQuery(i18n.language)
      const {data: HajjDays} = useGetHajjDaysQuery(i18n.language)
        
      if (isLoading) {
          return(
            <NoInternet/>
          )
      }
      else if (isError) {
        return(
          <NoInternet/>
          )
        }
        else if (isSuccess) {
        const HajjDate = `${HajjStartDate.hajj_date_year}-${String(HajjStartDate.hajj_date_month).padStart(2, '0')}-${String(HajjStartDate.hajj_date).padStart(2, '0')}`;
        const markedDates = {
          [HajjDate]: { selected: true, activeOpacity: 0 },
        };
        const date = new Date(HajjStartDate.hajj_date_year, HajjStartDate.hajj_date_month - 1, HajjStartDate.hajj_date)
          
        return (
            <View style={styles.Container}>
                <StartTable 
                    date={date}
                    onPress={() => setModalVisible(true)}
                    description={t('date_hajj_beggining')}/>
                  
                  <Modal
                    onPress={() => setModalVisible(!modalVisible)}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.YoutubePlayerWrapper}>
                        <Pressable style={styles.YoutubePlayerClose} onPress={() => setModalVisible(!modalVisible)}>
                            <Image style={{height:20,width:20,}} source={require('../assets/Icons/X.png')}/>
                        </Pressable>
                        <View style={styles.YoutubePlayerVideoWrapper}>
                          <Calendar
                          style={{width:Dimensions.get('window').width * 0.85, height:350,}} markedDates={markedDates} />
                        </View>
                    </View>
                    <Pressable 
                        style={styles.centeredView} 
                        onPress={() => setModalVisible(!modalVisible)}/>
                </Modal>

                    <FlatList style={styles.List}
                    data={HajjDays}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id} 
                    renderItem={({item}) => <CalendarDate item={item}/>}/>
            </View>
    );
  }}
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      marginHorizontal: '6%',
      marginTop:30,
    },
    List: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E9E9E9'
    },
    centeredView: {
      flex: 1,
      position:'relative',
      zIndex:1,
      backgroundColor:"rgba(0,0,0,.5)",
    },
    
    YoutubePlayerWrapper:{
      position:'absolute',
      zIndex:2,
      top: '35%',
      left:Dimensions.get('window').width * 0.075
    },
    YoutubePlayerVideoWrapper:{
        backgroundColor:'#fff',
        borderRadius:20,
        overflow:'hidden',
        alignItems:'center',
        justifyContent:'center',
    },
    preloader:{
        position:'absolute',
        height:30,
        width:30,
    },  
    YoutubePlayerClose:{
        position:'absolute',
        top:-55,
        right:10,
        backgroundColor:'#F6F6F6',
        borderRadius:10,
        padding:5,
        alignItems:'center',
        justifyContent:"center",
        zIndex:2,
        height:35,
        width:35,
    }
  })