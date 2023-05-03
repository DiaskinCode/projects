import { ScrollView,View, Text, StyleSheet} from 'react-native';
import { useTranslation } from 'react-i18next';

export default function RiteTypesOfHajj (props) {
    const {t} = useTranslation();
    return (
        <ScrollView>
            <View style={styles.Container}>
                <Text style={styles.Text}>
                    {t('RiteTypesOfHajj')}
                </Text>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
  Container: {
    marginHorizontal: '6%',
    marginTop: 24,
    flex: 1,
  },
  Text:{
    fontSize:18,
    lineHeight:25,
    marginBottom:50,
  }
});



