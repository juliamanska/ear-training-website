const Staff = () => {
  const svgStyle = {
    position: "absolute",
    width: "100%",
    height: "200px",
  };

  return (
    <div>
      <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0%"
          y1="20"
          x2="100%"
          y2="20"
          stroke="black"
          strokeWidth="1.5"
          color="red"
        />
        <line
          x1="0%"
          y1="35"
          x2="100%"
          y2="35"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="0%"
          y1="50"
          x2="100%"
          y2="50"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="0%"
          y1="65"
          x2="100%"
          y2="65"
          stroke="black"
          strokeWidth="1.5"
        />
        <line
          x1="0%"
          y1="80"
          x2="100%"
          y2="80"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default Staff;
