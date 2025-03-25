import React, { useEffect, useState } from "react";
import P_Card from "./P_Card";

export default function People() {
  const [people, setPeople] = useState([]);
  const [color, setColor] = useState("green");

  useEffect(() => {
    fetch("https://67dd7d32e00db03c406bd96e.mockapi.io/person")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      });
  }, []);

  useEffect(() => {
    alert("change")
  }, [color]);

  return (
    <div>
      <h1 className="font-bold text-3xl w-full flex justify-center items-center mb-8">People</h1>
      <button onClick={() => { setColor("orange") }}>change color</button>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {people.map((person) => (
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
