import {
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Image,
} from 'react-native'
import React from 'react'
import { styles } from './styles'
// import homeIcon from '../../../assets/icons/Home.png'
interface Props extends TouchableOpacityProps {
  title: string
  icon: boolean
}
export function RoutesButton({ title, icon, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.75} style={styles.button} {...rest}>
        {icon ? (
          <View style={styles.iconWrapper}>
            <Image
              source={require('../../../assets/icons/Home.png')}
              style={styles.iconImg}
            />
          </View>
        ) : (
          <></>
        )}
        <View style={icon ? styles.textView : styles.textViewWithoutIcon}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
