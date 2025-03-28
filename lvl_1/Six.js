function Six({ color }) {
    const boxStyle = {
        backgroundColor: color, // Dynamically set background color
        width: '200px',
        height: '100px',
        textAlign: 'center',
        lineHeight: '100px',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        borderRadius: '10px'
    };

    return <div style={boxStyle}>Color: {color}</div>;
}

export default Six;
