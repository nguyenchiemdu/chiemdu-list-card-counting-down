import React from "react";
import "./Card.scss";
import moment, { now } from "moment";

class Card extends React.PureComponent {
  constructor(props){
    super(props);
    this.getTime = ()=>{
      const { dataItem } = this.props;
      return(dataItem.time)
    }
    this.state={
      time : this.getTime(),
        ok: true
    }
  }
  componentDidMount(){
    if(this.state.time>0){
     setTimeout(()=>{
      this.setState({
        time: this.state.time -1,
      },console.log(this.state.time))
     },1000)
    }
  }
  componentDidUpdate(){
    if(this.state.time>0){
      setTimeout(()=>{
       this.setState({
         time: this.state.time -1,
       },console.log(this.state.time))
      },1000)
     }
  }
  render() {
    const { dataItem } = this.props;
    const timeFormated = moment();
    timeFormated.hour(0);
    timeFormated.minutes(0);
    timeFormated.seconds(this.state.time);
    const {time} = this.state;
    if (time!==0){
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
                    <span className="txt-time"> 
                    {
                      (timeFormated.minutes() > 1) || (timeFormated.minutes()==1 && timeFormated.seconds() > 0) ? timeFormated.hours()+' hrs ':null
                    }
                    {
                      (timeFormated.minutes() > 1) || (timeFormated.minutes()==1 && timeFormated.seconds() > 0) ? timeFormated.minutes()+' mins ': null
                    }
                    {
                      (timeFormated.minutes()==1 && timeFormated.seconds()==0) ? 60+' s ' : null
                    }
                    {
                      (timeFormated.minutes()==0) ? timeFormated.seconds()+' s ' : null
                    }

                    </span>
                  </div>
                </div>
                )
    }
    else return(null);
      
    }
}

export default Card;
