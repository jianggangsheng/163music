export function getDate(timestamp,flag=true){
    let date = new Date(timestamp);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    if(flag){
        return Y+M+D
    }else{
        return Y+M+D+h+m+s
    }
}

export function lrc2Json(lrc){
  let arr = lrc.split('\n')
  let timeReg = /^\[.*\]/
  let json = []
  arr.forEach(item => {
    let time = item.match(timeReg)[0].substr(1, 8)
    let minute = time.substr(0, 2)
    let second = time.substr(3, 2)
    let ms = time.substr(6, 2)
    json.push({
      time,
      ms: parseInt(minute) * 60 * 1000 + parseInt(second) * 1000 + parseInt(ms) * 10,
      content: item.substr(10)
    })
  })
  // console.log(json)
  return json
}