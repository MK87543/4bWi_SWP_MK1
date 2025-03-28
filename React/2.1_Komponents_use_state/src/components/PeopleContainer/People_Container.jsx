import React, { useEffect, useState } from "react";
import P_Card from "./P_Card";

export default function People() {
  const [people, setPeople] = useState([]);
  const [color, setColor] = useState("green");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://67dd7d32e00db03c406bd96e.mockapi.io/person")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
        setFilteredPeople(data)
      });
  }, []);

  useEffect(() => {
  }, [color]);


  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
  }


  return (
    <div className="">
      <div className="fixed mb-4 bg-white w-full h-28">
        <h1 className="font-bold text-3xl w-full flex justify-center items-center ">People</h1>
        {/*<button onClick={() => { setColor("orange") }}>change color</button> */}

        <div className=" mb-4">
          <input className="border p-4" type="text" placeholder="search" onChange={(element) => {

            filterPeople(element.target.value);

          }} />
        </div>

      </div>


      <div className="grid grid-cols-2 lg:grid-cols-4  gap-4b p-8 pt-32">
        {filteredPeople.map((person) => (
          <P_Card
            key={person.id}
            name={person.name}
            imageUri={person.avatar}
            title={person.jobtitle}
          />
        ))}
      </div>
    </div>
  );
}
