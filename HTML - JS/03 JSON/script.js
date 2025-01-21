let data = [
    { firstname: "Hans", lastname: "Huber", point: 30 },
    { firstname: "Paul", lastname: "Müller", point: 25 },
    { firstname: "Franze", lastname: "Maier", point: 10 },
    { firstname: "Geter", lastname: "Psteu", point: 35 },


];

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element.firstname)

}


/*
data.forEach(element =>{
    console.log(element.firstname)
}) 
    */



function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>"
    });

    document.getElementById("content").innerHTML = html;

}

loadPeople();