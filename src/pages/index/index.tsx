import { View, Text } from '@tarojs/components'
import { add } from '@umworks/lib'
import './index.scss'

export default () => {
	return (
		<View className="index">
			<Text>Hello world! dadsa</Text>
			<Text>{add(11, 11)}</Text>
		</View>
	)
}
