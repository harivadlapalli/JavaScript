// create promise
function generatePomise(message) {
    return new Promise((resolve, reject) => {
        if (!message) {
            reject("Message is EMpty");
        } else {
            setTimeout(() => {
                console.log(message);
                resolve();
            }, 1000);
        }
    });
}

async function generatePomiseDifferentWay(){
    try{
        await generatePomise("1St Call");
        await generatePomise("2St Call");
        await generatePomise();
    }catch(err){
        console.log("Failed:"+err);
    }
}

generatePomiseDifferentWay();

/*generatePomise().then(() => {
    console.log("Promise Resolved Successfully");
}).catch((err) => {
    console.log("Promise Rejected:"+err);
});

// how to call the promise
generatePomise("1st call").then(() => {
    console.log("1St promise resolved succesfully");
    generatePomise("2nd Promise");
}).then(() => {
    console.log("2nd Promise Resolved");
    generatePomise();
}).catch((err) => {
    console.log("Promise Rejected:"+err);
});*/