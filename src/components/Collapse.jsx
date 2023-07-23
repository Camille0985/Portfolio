import React, { useState } from 'react';
import '../style/Collapse.scss'

function Collapse({title, values}) {
    const [isCollapsed, setIsCollapsed] = useState(true);  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    return (
        <div className="collapse">
            <button onClick={toggleCollapse}>{title}</button>
            {!isCollapsed && (
                <ul>
                    {Array.isArray(values) ? (
                        values.map((value, i) => (
                            <li key={i}>{value}</li>
                        ))
                        ) : (
                            <p>{values}</p>
                        )}
                </ul>
            )}
        </div>
    );
}  

export default Collapse;