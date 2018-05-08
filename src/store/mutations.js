export default {
  //第一个参数为vuex自带，第二个为自定义回传
  changeCity (state, city) {
    state.city = city
    //刷新浏览器后数据会还原，用localStorage进行存储，保证刷新后仍然是刷新前的城市
    try {
      localStorage.city = city
    } catch (e) {
      alert("浏览器不支持localStorage或处于隐身模式")
    }
  }
}
