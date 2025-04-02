import {View, Image} from '@tarojs/components'
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter"
import {AtButton} from 'taro-ui'
import header1 from "../../asstes/header1.jpg"

import './index.scss'

/**
 * 首页组件
 */
export default () => {
  return (
    <View className='indexPage'>
      <View className='title'>
        MBTI 性格测试
      </View>
      <View className='subTitle'>只需要一分钟就知道你自己的性格</View>
      <AtButton type='primary' circle className='enterBtn' >开始测试</AtButton>
      <Image src={header1}/>
      <GlobalFooter/>
    </View>

  );
};
