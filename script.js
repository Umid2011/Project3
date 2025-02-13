function Window1(){
    let newWindow = window.open();
    setTimeout(function() {
        newWindow.close();
    },5000);
}
Window1()