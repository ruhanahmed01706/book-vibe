const getWishBook = ()=>{
    const storeBookSTR = localStorage.getItem("WishList");
    if(storeBookSTR){
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;

    }
    else{
        return[];
    }
}

const addToWishlist =(id)=>{
    const storeBookData = getWishBook();
    if(storeBookData.includes(id)){
        alert("All ready Added..!")
    }
    else{
        storeBookData.push(id);
        console.log(storeBookData);
        
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("WishList",data)
    }
}
export {addToWishlist,getWishBook};