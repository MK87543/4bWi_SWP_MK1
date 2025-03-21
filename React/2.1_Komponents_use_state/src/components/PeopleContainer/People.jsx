import React, { useEffect, useState } from "react";
import P_Card from "./P_Card";

export default function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://67dd7d32e00db03c406bd96e.mockapi.io/person")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      });
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className="w-40">
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
