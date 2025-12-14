const lightColor = process.argv[2];
if (!lightColor) {
    console.log("Unknow");
}
else {
    const sign = lightColor.toLowerCase();
    if (sign === "red"){
        console.log("Stop");
    }
    else if (sign === "yellow"){
        console.log("Caution");
    }
    else if (sign === "green"){
        console.log("Go");
    }
    else {
        console.log("Unknow");
    }
}