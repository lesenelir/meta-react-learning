function getStorage() {
  const dataStr = localStorage.getItem('list')
  return JSON.parse(dataStr) || []
}

function setStorage(item, id) { // item是一个对象
  let listData = JSON.parse(localStorage.getItem('list')) // JSON对象

  if (id) {
    // 删
    listData = listData.filter((item) => {
      return item.id !== id
    })
  } else {
    // 增
    listData.push(item)
  }

  localStorage.setItem('list', JSON.stringify(listData))
  return listData
}

export {
  getStorage,
  setStorage
}
