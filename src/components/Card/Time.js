import React from 'react';
import moment, { now } from "moment";


class Time extends React.Component{
    constructor(props){
        super(props);
        this.state={
            time : this.props.Time,
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
         if (this.state.time==0){
             this.props.NoDisplay();
         }
      }
    render(){
        const timeFormated = moment();
        timeFormated.hour(0);
        timeFormated.minutes(0);
        timeFormated.seconds(this.state.time);
        return(
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
        )
    }
}
export default Time;