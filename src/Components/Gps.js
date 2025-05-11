import React from "react";
const Gps= () =>{
    return (
    <div>
       <link rel="stylesheet" href="gps.css" />
<div class="container mt-5">
    <form id="gpsForm">
      <h4>Set Your Location Using GPS</h4>
  
      <div class="form-group">
        <label for="latitude">Latitude</label>
        <input type="text" class="form-control" id="latitude" placeholder="Latitude" readonly />
      </div>
  
      <div class="form-group">
        <label for="longitude">Longitude</label>
        <input type="text" class="form-control" id="longitude" placeholder="Longitude" readonly />
      </div>
  
      <button type="button" class="btn btn-success mt-3" onclick="getLocation()">Get GPS Location</button>
    </form>
  </div>

    </div>
    )
}

export default Gps
