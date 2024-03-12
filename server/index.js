const express=require('express')
const cors=require('cors')
const app=express()
const port=35987
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

app.post('/api/form-post/',(request,response) =>{
    let name = request.body.name || ''
    let email = request.body.email || ''
    let msg = request.body.message || ''
    let text = `
        <table border = "1">
            <caption>ข้อมูลที่ส่งขึ้นไป</caption>
            <tr><td>ชื่อ: </td><td>${name}</td></tr>
            <tr><td>อีเมล: </td><td>${email}</td></tr>
            <tr><td>ข้อความ: </td><td>${msg}</td></tr>
        </table>
        `
    response.send(text)
})

app.listen(port, () => {
    console.log('Server listening on localhost:' + port);
});