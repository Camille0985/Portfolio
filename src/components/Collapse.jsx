import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../style/Collapse.scss'
import ArrowTop from '../assets/arrow-up.png';
import ArrowBot from '../assets/arrow-back.png';

function Collapse({ title, values }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [ulHeight, setUlHeight] = useState(0);
    const ulRef = useRef(null);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };
  
    const getHeight = useCallback(() => {
      return isCollapsed ? 0 : ulRef.current.scrollHeight;
    }, [isCollapsed]);
  
    useEffect(() => {
      setUlHeight(0);
    }, []);
  
    useEffect(() => {
      const ulHeight = getHeight();
      setUlHeight(ulHeight);
    }, [getHeight]);
  
    const handleTransitionEnd = () => {
      setUlHeight(isCollapsed ? 0 : ulRef.current.scrollHeight);
    };
  
    return (
      <div className="collapse">
        <div>
          <div onClick={toggleCollapse}>
            <div className="title-collapse">{title}</div>
            <img src={isCollapsed ? ArrowBot : ArrowTop} alt="Arrow" className="arrow-img" />
          </div>
          <ul
            className={`slide-down ${isCollapsed ? 'collapsed' : ''}`}
            ref={ulRef}
            style={{ maxHeight: ulHeight }}
            onTransitionEnd={handleTransitionEnd}
          >
            {Array.isArray(values) ? (
              values.map((value, i) => (
                <li key={i}>{value}</li>
              ))
            ) : (
              <p>{values}</p>
            )}
          </ul>
        </div>
      </div>
    );
}  

export default Collapse;