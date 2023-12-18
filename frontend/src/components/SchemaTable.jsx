import React, { useState } from 'react';
import './SchemaTable.css';
import { EyeIcon } from './EyeIcon.jsx';

const SchemaTable = () => {

    //each row (key) needs a boolean state for visability
    const [ visibility1, setVisibility1] = useState(false);
    const [ visibility2, setVisibility2] = useState(false);
    const [ visibility3, setVisibility3] = useState(false);
    const [ visibility4, setVisibility4] = useState(false);

    return (
        <>
            <h5><u><b>SCHEMA</b></u></h5>
            <div className="table">
            <table>
                <tr>
                    <td className="column1">{<EyeIcon label="eye1" name="eye1" id="eye1" setVisibility={setVisibility1}/>}</td> {/* EyeIcon can change visability1 */}
                    <td className="column2">{visibility1 ? <label className="toggledOff">restaurant_id</label> : <label>restaurant_id</label>}</td> {/* visability1 determines color of key*/}
                    <td className="column3">String</td>
                    <td className="column4">100%</td>
                </tr>
                <tr>
                    <td className="column1">{<EyeIcon label="eye2" name="eye2" id="eye2" setVisibility={setVisibility2}/>}</td>
                    <td className="column2">{visibility2 ? <label className="toggledOff">address</label> : <label>address</label>}</td>
                    <td className="column3">Object</td>
                    <td className="column4">100%</td>
                </tr>
                <tr>
                    <td className="column1">{<EyeIcon label="eye3" name="eye3" id="eye3" setVisibility={setVisibility3}/>}</td>
                    <td className="column2">{visibility3 ? <label className="toggledOff">names</label> : <label>names</label>}</td>
                    <td className="column3">String[]</td>
                    <td className="column4">99%</td>
                </tr>
                <tr>
                    <td className="column1">{<EyeIcon label="eye4" name="eye4" id="eye4" setVisibility={setVisibility4}/>}</td>
                    <td className="column2">{visibility4 ? <label className="toggledOff">score</label> : <label>score</label>}</td>
                    <td className="column3">Number</td>
                    <td className="column4">5%</td>
                </tr>
            </table>
            </div>
        </>
    );


}

export { SchemaTable };