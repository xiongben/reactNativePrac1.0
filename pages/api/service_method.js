import './service_url';



async function request(url, formData, method) {
    try{
        let response;
        let paramsString = "";
        if(formData != null){
            let paramsArray = [];
            Object.keys(formData).forEach(key => paramsArray.push(key + '=' + formData[key]))
            paramsString += paramsArray.join('&');
            // if (url.search(/\?/) === -1) {
            //     url += '?' + paramsArray.join('&')
            // } else {
            //     url += '&' + paramsArray.join('&')
            // }
        }
        if(!!method && method == "post"){
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: paramsString,
            });
        }else{
            url = formData?url + "?" + paramsString : url;
            response = await fetch(url);
        }

        // if(response.statusCode == 200){
        //     return response.data;
        // }else{
        //     throw Exception("wow,server have some error");
        // }
        let responseJson = await response.json();
        return responseJson;
    }
    catch(e){
        console.log(e);
    }
}

export default request;