import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

function Home() {
	const [color, setColor] = useState("red");
  
	// Clases dinámicas para agregar el efecto de destello al semáforo
	const trafficLightClass = `traffic-light ${
	  color === "red" ? "active-red" : color === "yellow" ? "active-yellow" : "active-green"
	}`;
  
	return (
	  <div className={trafficLightClass}>
		<div
		  className={`light red ${color === "red" ? "brillibrillimiaumiau" : ""}`}
		  onClick={() => setColor("red")}
		></div>
		<div
		  className={`light yellow ${color === "yellow" ? "brillibrillimiaumiau" : ""}`}
		  onClick={() => setColor("yellow")}
		></div>
		<div
		  className={`light green ${color === "green" ? "brillibrillimiaumiau" : ""}`}
		  onClick={() => setColor("green")}
		></div>
	  </div>
	);
  }
  
  export default Home;

