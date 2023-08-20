import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";


const PlanetDetails = (props) => {
    

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${props.srcIMG}.jpg`} 
                        className="card-image"
                        alt="..."
                        onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                    }}
                    />
                    </div>

                    <div className="col-8">
                        <h5>NAME{props.name}</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet massa. Rhoncus dolor purus non enim praesent elementum facilisis leo. Ornare arcu odio ut sem nulla. Amet porttitor eget dolor morbi non arcu risus quis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec feugiat in fermentum. Purus gravida quis blandit turpis cursus in hac habitasse. Risus at ultrices mi tempus. Tincidunt vitae semper quis lectus nulla at. Ipsum faucibus vitae aliquet nec ullamcorper. Neque gravida in fermentum et sollicitudin ac orci. Pharetra pharetra massa massa ultricies mi.</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="footer-planets">
                <h5 className="footer-captions">Population</h5>
                <h5 className="footer-captions">Climate</h5>
                <h5 className="footer-captions">Diameter</h5>
                <h5 className="footer-captions">Gravity</h5>
                <h5 className="footer-captions">Terrain</h5>
              
            </div>
        </>
    );
};

PlanetDetails.proptypes ={
    name: PropTypes.string
}


export default PlanetDetails;
