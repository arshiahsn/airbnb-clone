import React from "react";
import "./flat.css";

class Flat extends React.Component {

    handleClick = () => {
        this.props.selectFlat(this.props.flat);

    }
    render () {
    const title = this.props.flat.name +" "+this.props.flat.priceCurrency + this.props.flat.price;
    const style = {
        backgroundImage: `url('${this.props.flat.imageUrl}')`
    };


    return (


    <div className="flat" onClick={this.handleClick}>
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">{title}</div>
    </div>
    );
    }
}

export default Flat;