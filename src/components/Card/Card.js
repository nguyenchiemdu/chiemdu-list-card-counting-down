import React from "react";
import "./Card.scss";
import "./Time";
import Time from "./Time";

class Card extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      Display : true,
    }
  }
  NoDisplay = ()=>{
    this.setState({
      Display: false
    })
  }
  render() {
    const { dataItem } = this.props;
    if (this.state.Display==true){
                return(
                  <div className="card">
                  <div className="ctn-img">
                    <img src={dataItem.imageUrl} />
                  </div>
                  <div className="ctn-name">
                    <img
                      width={15}
                      height={15}
                      src="https://dummyimage.com/200x200/000/fff"
                    />
                    <span className="txt-name">{dataItem.name}</span>
                  </div>
                  <div className="quantity-item">1 Items</div>
                  <div className="quantity-panto">
                    <img
                      width={15}
                      height={15}
                      src="https://dummyimage.com/200x200/000/fff"
                    />
                    <span className="txt-panto">{dataItem.quantity} PANTO POINT</span>
                  </div>
                  <div className="time-remaining">
                    <img
                      width={15}
                      height={15}
                      src="https://dummyimage.com/200x200/000/fff"
                    />{" "}
                   <Time NoDisplay={this.NoDisplay} Time={this.props.dataItem.time}/>
                  </div>
                </div>
                )
    }
    else return(null);
      
    }
}

export default Card;
