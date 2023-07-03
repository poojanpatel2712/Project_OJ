import React from "react";

function button({ textColor, backgroundColor, onPress, text, width }) {
  return (
    <div>
      <button
        className="rounded-lg flex justify-center p-2"
        onClick={onPress}
        style={({ backgroundColor: backgroundColor }, { width: width })}        
      >
        <h1 className="text-xl"  style={{color: textColor}}>
          {text}
        </h1>
      </button>
    </div>
  );
}

export default button;
