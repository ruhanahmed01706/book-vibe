const getStoreBook = ()=>{
    const storeBookSTR = localStorage.getItem("readList");
    if(storeBookSTR){
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;

    }
    else{
        return[];
    }
}

const addToStoreDB =(id)=>{
    const storeBookData = getStoreBook();
    if(storeBookData.includes(id)){
        alert("All ready Added..!")
    }
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList",data)
    }
}
export {addToStoreDB,getStoreBook};