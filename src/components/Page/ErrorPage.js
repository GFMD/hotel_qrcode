import React from "react";

export default function ErrorPage(){
    return(
        <div>
            <h1>Votre code QR n'est pas fonctionnel.</h1>
            <img style={{maxWidth : "400px"}} alt="githubGFMD QRCODE" src="./img/githubGFMD.png"/>
        </div>
    );
}