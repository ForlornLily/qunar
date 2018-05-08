let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  alert("浏览器不支持localStorage或处于隐身模式")
}
export default {
  city: defaultCity
}
