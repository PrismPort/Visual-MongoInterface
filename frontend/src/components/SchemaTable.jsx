import React, { useState } from 'react';
import './SchemaTable.css';
import { EyeIcon } from './EyeIcon.jsx';

const SchemaTable = () => {

    return (
        <>
            <h5><u><b>SCHEMA</b></u></h5>
            <div className="table">
            <table>
                <tr>
                    <td className="column1">{<EyeIcon label="eye1" name="eye1" id="eye1"/>}</td>
                    <td className="column2">restaurant_id</td>
                    <td className="column3">String</td>
                    <td className="column4">100%</td>
                </tr>
                <tr>
                    <td className="column1">{<EyeIcon label="eye2" name="eye2" id="eye2"/>}</td>
                    <td className="column2">address</td>
                    <td className="column3">Object</td>
                    <td className="column4">100%</td>
                </tr>
                <tr>
                    <td className="column1">{<EyeIcon label="eye3" name="eye3" id="eye3"/>}</td>
                    <td className="column2">names</td>
                    <td className="column3">String[]</td>
                    <td className="column4">99%</td>
                </tr>
                <tr>
                    <td className="column1">{<EyeIcon label="eye4" name="eye4" id="eye4"/>}</td>
                    <td className="column2">score</td>
                    <td className="column3">Number</td>
                    <td className="column4">5%</td>
                </tr>
            </table>
            </div>
        </>
    );


}

export { SchemaTable };