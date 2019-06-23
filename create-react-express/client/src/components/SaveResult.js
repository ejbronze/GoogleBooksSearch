import React from "react"; 

function SavedResult({children}) {  
    return (
      <div className="container mt-3">
        <div className="card">
          <h5 className="card-header">Saved Results</h5>
          <div className="card-body">{children}</div>
        </div>
      </div>
    );
}

export default  SavedResult; 