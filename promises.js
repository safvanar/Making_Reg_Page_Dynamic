function buycar(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Buy a car.!");
        },5000)
    })   
}
function planatrip(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Let's go to Manali.!");
        },2000)
    })
    
}
function reachmanali(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Reached Manali.!");
        },1000)
    })
}
function visitmountain(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Visited the mountain.!");
        },1000)
    })
}

buycar()
    .then((msg)=>{
        console.log(msg);
        planatrip()
            .then((msg)=>{
                console.log(msg);
                reachmanali()
                    .then((msg)=>{
                        console.log(msg);
                        visitmountain()
                            .then((msg)=>{
                                console.log(msg);
                            })
                    })
            })
    })