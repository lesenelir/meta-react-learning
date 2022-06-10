export function fetchListData(field) {
  let url = ''

  switch (field) {
    case 'student':
      url = 'http://localhost:8080/getStudents'
      break
    case 'teacher':
      url = 'http://localhost:8080/getTeachers'
      break
    default:
      break
  }

  return axios(url)
}

