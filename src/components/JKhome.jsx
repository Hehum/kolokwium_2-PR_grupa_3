import React, {Component} from 'react';
class Komp extends Component {


  render() {

          state = {
              valuenow: 0
          };

          setNewValueNow = () => {
              this.setNewValueNow
          }

          return (
          <div>
             <div class="progress">
               <div class="progress-bar" role="progressbar" style={{width: "25%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
             </div>
             <button onClick="">zmien</button></div>
          )
      }
export default Komp;