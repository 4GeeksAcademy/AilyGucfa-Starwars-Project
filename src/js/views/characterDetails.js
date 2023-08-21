import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext"; // Import from app context

const CharacterDetails = () => {
     // Get the characterId from the route parameters
     const { characterId } = useParams();

     // Parse the characterId as an integer
     const parsedCharacterId = parseInt(characterId);
 
     // Access the store and actions from the app context
     const { store, actions } = useContext(Context);
 
     // Extract the characterDetails from the store
     const characterDetails = store.characterDetails;
 
     // Use the useEffect hook to fetch character details when needed
     useEffect(() => {
         // Check if character details are not already fetched
         if (!characterDetails.data) {
             // Fetch individual character details using actions
             actions.fetchIndividualCharacterDetails(parsedCharacterId);
         }
     }, [parsedCharacterId]);
 
     // Check if character details are still loading
     if (characterDetails.isLoading) {
         return <div>Loading...</div>;
     }
 
     // Check if character details are not available
     if (!characterDetails.data) {
         return <div>Error loading character details.</div>;
     }
 
     // Extract the fetched character data
     const characterData = characterDetails.data;



    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${parsedCharacterId}.jpg`} 
                        className="card-image"
                        alt="..."
                        onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                    }}
                    />
                    </div>

                    <div className="col-8">
                        <h5>NAME: {characterData.name} </h5>
                            <p>Lorem ipsum cha sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet massa. Rhoncus dolor purus non enim praesent elementum facilisis leo. Ornare arcu odio ut sem nulla. Amet porttitor eget dolor morbi non arcu risus quis. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Diam donec adipiscing tristique risus nec feugiat in fermentum. Purus gravida quis blandit turpis cursus in hac habitasse. Risus at ultrices mi tempus. Tincidunt vitae semper quis lectus nulla at. Ipsum faucibus vitae aliquet nec ullamcorper. Neque gravida in fermentum et sollicitudin ac orci. Pharetra pharetra massa massa ultricies mi.</p>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className="footer-character">
                <h5 className="footer-captions">Climate</h5>
                <h5 className="footer-captions">Gender</h5>
                <h5 className="footer-captions">Height</h5>
                <h5 className="footer-captions">Skin_color</h5>
                <h5 className="footer-captions">Eye_color</h5>
            </div>
        </>
    );
};


export default CharacterDetails;
