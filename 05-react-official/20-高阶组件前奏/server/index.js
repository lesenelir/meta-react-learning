const express = require('express')
const {readFileSync} = require('fs')
const {resolve} = require('path')

const app = express()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-methods', 'POST,GET')
  next()
})

app.get('/getTeachers', function (req, res) {
  const teacherData = JSON.parse(readFileSync(resolve(__dirname, './data/teachers.json'), 'utf-8'))
  res.send(teacherData)
})

app.get('/getStudents', function (req, res) {
  const studentData = JSON.parse(readFileSync(resolve(__dirname, './data/students.json'), 'utf-8'))
  res.send(studentData)
})

app.listen(8080, function () {
  console.log(1)
})
