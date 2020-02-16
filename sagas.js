
import {  put, takeEvery, all, call, take} from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

 function* helloSaga() {

    yield console.log("hello sagars,hah!");
}
 function* increaseTestNum() {
     yield put({type: 'INCREMENT'});
 }

 function* incrementAsync(params) {
     console.log("this is: "+ params.payload);
    // var testquest = function(){
    //     Api.get("/award/detail",{id:0}).then(
    //       res => console.log(res)
    //     )
    // }

    // yield call(delay,5000);
    // // const res = yield call(testquest);
    // // var text = "kkkkk";
    console.log("========delay========")
    yield delay(5000);
    yield put({type: 'INCREMENT',payload: {text:'Learn Redux'}});
}

 function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// function* loginSubmitAsync() {
//     var testquest = function(params){
//         return Api.get("/login",params).then(
//           res => res
//         )
//     }
//      let req = yield take('LOGIN_SUBMIT');
     
//     let params = req.payload;
//     // console.log(params);
//     const res = yield call(testquest,params);
//     console.log(res);
//     yield put({type: 'LOGIN_SUCCESS',data:res});
//     // history.push('/wechatlist');
// }





export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        
    ])
}