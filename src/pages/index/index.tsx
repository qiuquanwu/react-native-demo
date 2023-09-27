import { View, Text, Button } from '@tarojs/components'
import { add, subtract } from '@store'
import { useCountDispatch, useCountSelector } from '@hooks/count'
import { clone } from '@umworks/common'
import './index.scss'

export default () => {
  const count = useCountSelector((state) => state.count.value)
  const dispatch = useCountDispatch()

  return (
    <View className='index'>
      <Text>{typeof clone}</Text>
      <View className='flex'>
        <Button
          onClick={() => {
            dispatch(add())
          }}
        >
          加
        </Button>
        <Text style={{ fontSize: 36, color: 'red', textAlign: 'center' }}>{count}</Text>
        <Button
          onClick={() => {
            dispatch(subtract())
          }}
        >
          减
        </Button>
      </View>
    </View>
  )
}
