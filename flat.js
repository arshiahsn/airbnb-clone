import React from "react";
import "./flat.css";

class Flat extends React.Component {
    render () {
        // TODO: Generates HTML
    return (
        const title = this.props.flat.name + this.props.flat.priceCurrency + "-" + this.props.flat.price;

        const style = {
            backgroundImage: "url('"+this.props.flat.imageUrl+""')"
        };

    <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
            {this.props.title}
        </div>
    
    </div>
    );
    }
}

export default Flat;