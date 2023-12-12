import React, { useState } from 'react';
import './SchemaSidebar.css';
import { SchemaTable } from './SchemaTable.jsx';

const SchemaSidebar= () => {

    return (
        <>
            <div className="outerSidebar">
                <div className="innerSidebar">
                    <SchemaTable />
                </div>
            </div>
        </>
    );


}

export { SchemaSidebar };