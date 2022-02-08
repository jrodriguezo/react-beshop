import React from 'react';

function index({selectorName, values}) {
    console.log(values)
  return (                    
    <div>
    {selectorName} &nbsp;
    <select>
        {values.map((val,idx) =>
            <option key={idx} value={val}>{val}</option>
        )};
    </select>
</div>)
}

export default index;
