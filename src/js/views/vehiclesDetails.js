import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const VehiclesDetails = () => {
    const {store, actions} = useContext(Context);
    const {vehicleId} = useParams();
    const parsedVehicleId = parseInt(vehicleId) +1;
    
    useEffect (() =>{
        actions.fetchIndividualVehicleDetails(parsedVehicleId);
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${parsedVehicleId}.jpg`} 
                        className="card-image"
                        alt="..."
                        onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                    }}
                    />
                    </div>

                    <div className="col-8">
                        <h5>{store.vehicles[vehicleId]?.name}</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet massa. Rhoncus dolor purus non enim praesent elementum facilisis leo. Ornare arcu odio ut sem nulla. Amet porttitor eget dolor morbi non arcu risus quis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec feugiat in fermentum. Purus gravida quis blandit turpis cursus in hac habitasse. Risus at ultrices mi tempus. Tincidunt vitae semper quis lectus nulla at. Ipsum faucibus vitae aliquet nec ullamcorper. Neque gravida in fermentum et sollicitudin ac orci. Pharetra pharetra massa massa ultricies mi.</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-vehicles">
                <h5 className="footer-captions">Model: <p>{store.vehicles[vehicleId]?.model}</p></h5>
                <h5 className="footer-captions">Manufacturer: <p>{store.vehicles[vehicleId]?.manufacturer}</p></h5>
                <h5 className="footer-captions">Created: <p>{store.vehicles[vehicleId]?.created}</p></h5>
                <h5 className="footer-captions">Vehicle_class: <p>{store.vehicles[vehicleId]?.vehicle_class}</p></h5>
                <h5 className="footer-captions">Passengers: <p>{store.vehicles[vehicleId]?.passengers}</p></h5>
              
            </div>
        </>
    );
};

export default VehiclesDetails;
