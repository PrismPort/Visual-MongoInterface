import React from 'react';

// creating a PKCE flow for spotify authentication
// https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow

const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}

/* 
const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
        .replace(/=+$/, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
} */

/* const base64encode = (input) => {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(input)))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
} */


const codeVerifier = generateRandomString(64);

async function sha256(plain) {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)

    return window.crypto.subtle.digest('SHA-256', data)
}

function base64urlencode(a) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
        .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

const hashed = await sha256(codeVerifier)
const codeChallenge = base64urlencode(hashed)



const clientId = '[REPLACE WITH YOUR CLIENT ID]';
const redirectUri = 'http://localhost:3000/spotify-token-exchange';

const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")

// generated in the previous step
window.localStorage.setItem('code_verifier', codeVerifier);

const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
}

authUrl.search = new URLSearchParams(params).toString();


const SpotifyAuth = () => {

    const openSpotifyAuthWindow = () => {
        // Open a new window with the Spotify authorization URL
        const authWindow = window.open(authUrl.toString(), 'Spotify Auth', 'width=500,height=600');

        // You can also attach an event listener to handle when the child window is closed
        // For example, to perform some action when the user has finished the authorization process
        if (authWindow) {
            authWindow.addEventListener('beforeunload', () => {
                // Handle the child window close event, e.g., update UI or navigate back to your app
            });
        }
    };


    return (
        <div>
            <button onClick={openSpotifyAuthWindow}>Login</button>
        </div>
    );
};

export default SpotifyAuth;