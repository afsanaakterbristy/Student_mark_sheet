function dataSent(key,arr){
 let data =JSON.stringify(arr);
 localStorage.setItem(key,data);
 return true;
}

function dataGet(key){
     let data = localStorage.getItem(key);
     return data ? JSON.parse(data) : false ;
    
}