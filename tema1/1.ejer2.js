let date = new Date();

if(date.getHours() >= 7 && date.getHours() < 12){
    console.log("Buenos días.")
}else if(date.getHours() >= 12 && date.getHours() < 20){
    console.log("Buenas tardes.")
}else{
    console.log("Buenas noches.")
}