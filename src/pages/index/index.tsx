import { View, Text, Button } from '@tarojs/components'
import { add, subtract } from '@store/index'
import { useCountDispatch, useCountSelector } from '@hooks/count'
// import { throttle as MyAdd } from '@umworks/common/esm/throttle'
import Plus from '@umworks/taro-icon-park/src/Plus'
// import Plus from '../../../../../packages/lib/esm/Plus.rn'
import './index.scss'

export default () => {
  const count = useCountSelector((state) => state.count.value)
  const dispatch = useCountDispatch()
  // console.log(typeof clone)
  return (
    <View className='index'>
      <Text>{typeof Plus} </Text>

      <View className='flex'>
        <Button
          onClick={() => {
            dispatch(add())
          }}
        >
          <Plus size={40} fill='#000'></Plus>
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
