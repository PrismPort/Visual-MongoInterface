const SpotifyTokenExchange = () => {

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    let codeVerifier = localStorage.getItem('code_verifier'); // stored in the previous step

    const getToken = async (code) => {

        
        
        console.log("codeVerifier: " + codeVerifier);

        const payload = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: '[REPLACE WITH YOUR CLIENT ID]',
                grant_type: 'authorization_code',
                code,
                redirect_uri: 'http://localhost:3000/spotify-token-exchange',
                code_verifier: codeVerifier,
            }),
        }
        const url = new URL("https://accounts.spotify.com/api/token");

        const body = await fetch(url, payload);
        const response = await body.json();
        console.log(response);

        localStorage.setItem('access_token', response.access_token);
    }

    getToken(code);
    


    return (
        <div>
            <p>{code}</p>
        </div>
    );
};



export { SpotifyTokenExchange };