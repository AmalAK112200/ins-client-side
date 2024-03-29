import apicall from './interceptor'

//ins apicall
async function addINS(data) {
    const response = await apicall.apicall('post', 3002, 'ins/regADD', data)
    return response
}
async function getINS() {
    const response = await apicall.apicall('get', 3002, 'ins/getIns')
    return response
}
async function getINSByid(id) {
    const response = await apicall.apicall('get', 3002, `ins/getINSbyid/${id}`)
    return response
} async function updateINSbyid(id, data) {
    const response = await apicall.apicall('put', 3002, `ins/updateINSbyid/${id}`, data)
    return response
} async function secondupdateINS(id,userid, data) {
    const response = await apicall.apicall('put', 3002, `ins/secondupdateINS/${id}/${userid}`, data)
    return response
}
async function deleteINS(id) {
    const response = await apicall.apicall('delete', 3002, `ins/deleteINSbyid/${id}`)
    return response
}

// user apicall
async function signup(data) {
    const response = await apicall.apicall('post', 3002, 'user/signup', data)
    return response
}

async function signin(data) {
    const response = await apicall.apicall('post', 3002, 'user/signin', data)
    return response

}
async function verifyToken(data) {
    const response = await apicall.apicall('post', 3002, 'user/auth', data)
    return response

}

async function getUser(id) {
    const response = await apicall.apicall('get', 3002, `user/getuser/${id}`)
    return response

}
async function updateUser(id,data) {
    const response = await apicall.apicall('put', 3002, `user/updateuser/${id}`,data)
    return response

}
async function deleteUser(id) {
    const response = await apicall.apicall('delete', 3002, `user/deleteuser/${id}`)
    return response

}

//class room 
async function addClassRoom(data){
    const response = await apicall.apicall('post',4001,'ClsRoom/createClass',data)
    return response
}
async function getClassRoom(){
    const response = await apicall.apicall('get',4001,'ClsRoom/getClassroom')
    return response
}
async function getClassRoomById(id){
    const response = await apicall.apicall('get',4001,`ClsRoom/getClassroomById/${id}`)
    return response
}
async function updateClassRoom(id,data){
    const response = await apicall.apicall('put',4001,`ClsRoom/updateClassroom/${id}`,data)
    return response
}
async function deleteClassRoom(id){
    const response = await apicall.apicall('delete',4001,`ClsRoom/deleteClassroom/${id}`)
    return response
}


//stud apicall
async function addStud(data) {
    const response = await apicall.apicall('post', 3006, 'STD/addSTUD', data)
    return response
}
async function addStudent(id,data) {
    const response = await apicall.apicall('put', 3006, `STD/pushSTUD/${id}`, data)
    return response
}
async function getStud() {
    const response = await apicall.apicall('get', 3006, 'STD/getSTUD')
    return response
}
async function getStudByIdForOne(id) {
    const response = await apicall.apicall('get', 3006, `STD/getSTUDById/${id}}`)
    return response
}
async function getStudById(id) {
    const response = await apicall.apicall('get', 3006, `STD/getById/${id}`)
    return response
}
async function updateStud(id, data) {
    const response = await apicall.apicall('put', 3006, `STD/update/${id}`, data)
    return response
}
async function updateOneStudent(indexid,studentid,data) {
    const response = await apicall.apicall('put', 3006, `STD/updateOneStud/${indexid}/${studentid}`,data)
    return response
}
async function deleteStud(id) {
    // console.log(id,"id from mainservice");
    const response = await apicall.apicall('delete', 3006, `STD/delete/${id}`)
    return response
}
async function deleteStudOne(indexid,studentid) {
    // console.log(id,"id from mainservice");
    const response = await apicall.apicall('put', 3006, `STD/deleteStud/${indexid}/${studentid}`)
    return response
}

//tchr apicall
async function addTchr(data) {
    const response = await apicall.apicall('post', 3005, 'Tchr/addTeacher', data)
    return response
}
async function addTeacher(id,data) {
    const response = await apicall.apicall('put', 3005, `Tchr/pushTeacher/${id}`, data)
    return response
}
async function getTch() {
    const response = await apicall.apicall('get', 3005, 'Tchr/getTeacher')
    return response
}
async function getTchrById(id) {
    const response = await apicall.apicall('get', 3005, `Tchr/getbyid/${id}`)
    return response
}
async function update(id, data) {
    const response = await apicall.apicall('put', 3005, `Tchr/updateTeacher/${id}`, data)
    return response
}
async function updateOneTeacher(indexid,teacherid,data) {
    const response = await apicall.apicall('put', 3005, `Tchr/updateOneTeacher/${indexid}/${teacherid}`,data)
    return response
}

async function deleteTeacher(id) {
    const response = await apicall.apicall('delete', 3005, `Tchr/deleteTchr/${id}`)
    return response
}
async function deleteOneTeacher(indexid,teacherid) {
    const response = await apicall.apicall('put', 3005, `Tchr/deleteOneTchr/${indexid}/${teacherid}`)
    return response
}


export default {
    addINS,
    getINS,
    getINSByid,
    updateINSbyid,
    secondupdateINS,
    deleteINS,
    signup,
    signin,
    verifyToken,
    getUser,
    updateUser,
    deleteUser,
    addClassRoom,
    getClassRoom,
    getClassRoomById,
    updateClassRoom,
    deleteClassRoom,
    addStud,
    addStudent,
    getStud,
    getStudByIdForOne,
    getStudById,
    updateStud,
    updateOneStudent,
    deleteStud,
    deleteStudOne,
    addTchr,
    addTeacher,
    getTch,
    getTchrById,
    update,
    updateOneTeacher,
    deleteTeacher,
    deleteOneTeacher

}