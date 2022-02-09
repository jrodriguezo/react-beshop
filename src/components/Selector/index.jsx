import React, { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Selector({selectorName, values}) {

    const {setStorageValue, setColorValue} = useContext(UserContext)

    useEffect(function(){
        selectorName === 'Storage' ? setStorageValue(values[0]) : setColorValue(values[0])
    }, [selectorName])

    const handleChange = (e) => {
        e.preventDefault();
        selectorName === 'Storage' ? setStorageValue(e.target.value) : setColorValue(e.target.value)
    }

  return (                    
    <div>
    {selectorName} &nbsp;
    <select onChange={handleChange}>
        {values.map((val,idx) =>
            <option key={idx} value={val}>{val}</option>
        )};
    </select>
</div>)
}

export default Selector;
