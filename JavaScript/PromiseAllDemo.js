function resolveTimeOut(value,delay) {
    return new Promise((resolve) => setTimeout(() => resolve(value),delay));
}

function rejectTimeOut(reason,delay) {
    return new Promise((resolve,reject) =>
    setTimeout(() => reject(reason),delay));
}

async function load(){
    let promise1 = resolveTimeOut("Welcome to Tech journey with ankit",5000);
    //let promise2 = resolveTimeOut("Welcome to Tech journey with Hari",5000);
    let promise2 = rejectTimeOut("Loading Failed", 4000);
    //const allPromise = Promise.all([promise1,promise2]);
   // const allPromise = Promise.any([promise1,promise2]);
   const allPromise = Promise.race([promise1,promise2]);

    try{
        const lists = await allPromise;
        console.log("lists",lists);
    }catch (err){
        console.log(err);
    }
}

load();