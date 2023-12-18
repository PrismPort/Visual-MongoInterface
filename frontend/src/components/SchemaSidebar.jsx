import React, { useState } from 'react';
import './SchemaSidebar.css';
import { SchemaTable } from './SchemaTable.jsx';

const SchemaSidebar= () => {

    return (
        <>
            <div className="outerSidebar"> {/* outerSidebar = flexbox, innerSidebar = flex element (in css) */}
                <div className="innerSidebar">
                    <SchemaTable />
                </div>
            </div>
        </>
    );


}

export { SchemaSidebar };