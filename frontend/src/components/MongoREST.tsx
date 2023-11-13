import React from 'react';
import './MongoREST.css';
import { useState } from 'react';

interface MongoLoginProps {
    username: string;
    password: string;
    adress: string;
    port: string;
}

interface MongoLoginState {
    username: string;
    password: string;
    adress: string;
    port: string;
}

const MongoLogin = () => {

    const mongoURL = localStorage.getItem('mongoURL');


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [port, setPort] = useState('');

    // send as body to backend when submit
    const loginData: MongoLoginProps = {
        username: username,
        password: password,
        adress: adress,
        port: port,
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const loginData: MongoLoginProps = {
            username: data.get('username') as string,
            password: data.get('password') as string,
            adress: data.get('adress') as string,
            port: data.get('port') as string,
        };
        try {
            const response = await fetch('http://localhost:4000/connect-to-mongodb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            if (response.ok) {
                console.log('Login successful');
                // consume response body as json
                const body = await response.json();
                console.log(body);

                // save token to local storage
                localStorage.setItem('mongoURL', body.mongoURL);

                // reload page
                window.location.reload();

            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    if (mongoURL) {
        return null;
    } else {
        return (
            <>
                <form className='LoginForm' onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="adress" defaultValue={"127.0.0.1"}/>
                    </label>
                    <label>
                        Port:
                        <input type="text" name="port" defaultValue={"27017"}/>
                    </label>

                    <input type="submit" value="Submit" id="submit-button" />
                </form>
            </>
        );
    }
}



const MongoOptions = () => {
    const [databases, setDatabases] = useState<string[]>([]);
    const mongoURL = localStorage.getItem('mongoURL');

    const handleShowDatabases = async () => {
        try {
            const response = await fetch('http://localhost:4000/query-databases', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'mongoURL': mongoURL as string,
                },
            });
            const data = await response.json();
            setDatabases(data);
        } catch (error) {
            console.error(error);
        }
    };

    if (!mongoURL) {
        return null;
    }
    else {
        return (
            <>
                <div className='MongoOptions'>
                    <h1>Connected to MongoDB</h1>
                    <p>URL: {mongoURL}</p>
                    <button onClick={handleShowDatabases}>Show all databases</button>
                    {databases.length > 0 && (
                        <ul>
                            {databases.map((database) => (
                                <li key={database}>{database}</li>
                            ))}
                        </ul>
                    )}

                    <button id='button-red' onClick={deleteMongoURL}>logout</button>
                </div>
            </>
        );
    }
};

const deleteMongoURL = () => {
    localStorage.removeItem('mongoURL');
    window.location.reload();
};

const MongoREST = () => {
    return (
        <>
            <div className='MongoREST'>
                <MongoLogin />
                <MongoOptions />
            </div>
        </>
    );
}




export { MongoREST };