let data = [
    { firstname: "Hans", lastname: "Huber", point: 30 },
    { firstname: "Paul", lastname: "Müller", point: 25 },
    { firstname: "Franze", lastname: "Maier", point: 10 },
    { firstname: "Geter", lastname: "Psteu", point: 35 },
    { firstname: "Der", lastname: "Beste", point: 48 },



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
    /*   let html_F = "";
       let html_L = "";
       let html_P = "";
   
       data.forEach(element => {
           html_F += "<div>" + element.firstname + "</div>"
           html_L += "<div>" + element.lastname + "</div>"
           html_P += "<div>" + element.point + "</div>"
   
   
       });
   
       document.getElementById("firstname").innerHTML = html_F;
       document.getElementById("lastname").innerHTML = html_L;
       document.getElementById("points").innerHTML = html_P;
   
   
   
   }
   
   */

    let tableBody = "";

    data.forEach(element => {
        tableBody += `
           <tr>
               <td>${element.firstname}</td>
               <td>${element.lastname}</td>
               <td>${element.point}</td>
           </tr>`;
    });

    document.getElementById("table-body").innerHTML = tableBody;

}
loadPeople();