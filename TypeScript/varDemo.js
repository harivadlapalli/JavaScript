function displayMsg() {
    var msg = "Hello World";
    {
        var msg_1 = "Hello Hari";
        console.log("Inner finction Msg::" + msg_1);
    }
    console.log("Outside function mmsg ::" + msg);
}
displayMsg();
