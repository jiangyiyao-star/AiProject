import {Image, View} from '@tarojs/components'
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter"
import {AtButton} from 'taro-ui'
import questions from  '../../data/questions.json'
import questionResults from '../../data/question_results.json'
import './result.scss'
import Taro from "@tarojs/taro";
import header1 from "../../asstes/header1.jpg"
import {getBestQuestionResult} from "../../utils/bizUtils";
/**
 * 首页组件
 */
/**
 * 查看结果页面
 */
/**
 * 查看结果页面
 */
export default () => {
  const answerList = Taro.getStorageSync("answerList");   //获取答案列表
  if (!answerList || answerList.length < 1) {
    Taro.showToast({  //答案为空，提示用户重新答题
      title: '答案为空',
      icon: 'error',
      duration: 3000
    })
  }

  const result = getBestQuestionResult(answerList, questions, questionResults);  //获取最佳结果

  return (
    <View className="resultPage">
      <View className="at-article__h1 title">{result.resultName}</View>
      <View className="at-article__h3 subTitle">{result.resultDesc}</View>
      <AtButton
        type="primary"
        size="normal"
        className="enterBtn"
        circle
        onClick={() => {
          Taro.reLaunch({    //防止界面无限跳转
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image src={header1} style={{ width: "100%" }} mode="aspectFill" />
      <GlobalFooter />
    </View>
  );
};
