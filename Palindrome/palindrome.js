let isEqual = (a,b) => {
    return a.join() == b.join();
}


var isPalindrome = (x) =>{
    if (x<0){
        return false
    }else{
        array_a = Array.from(String(x),Number)
        
        const array_b = [];
        for(var i = 1;i<=array_a.length;i++){
            n = array_a.length - i 
            array_b.push(array_a[n])
        }

        if (isEqual(array_a, array_b)){
            return true
        }else{
            return false
        }
    }
}
