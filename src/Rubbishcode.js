{/* ////////////////////////// div tag # onClick={() => fn()} onKeyDown={() => fn()} #  */}


var Coverflow = require('react-coverflow');


<Coverflow  displayQuantityOfSide={2} height={300} otherFigureScale={1} currentFigureScale={1}  navigation={true} enableHeading={false} style={styles.carousel} >
       
<div  role="menuitem" tabIndex="0">

     <img src='https://www.gstatic.com/webp/gallery/1.jpg' alt='title or description' style={{ display: 'block', width: '100%' }}/>

</div>

<div  role="menuitem" tabIndex="0">

     <img src='https://www.gstatic.com/webp/gallery/2.webp' alt='title or description' style={{ display: 'block', width: '100%' }}/>

</div>
<div  role="menuitem" tabIndex="0">

     <img src='https://www.gstatic.com/webp/gallery/3.jpg' alt='title or description' style={{ display: 'block', width: '100%' }}/>

</div>

</Coverflow>

{/* ////////////
     
import React, {Component} from 'react';
import styles from './Graphs.module.css';
import {Chart} from 'grommet';
 
class Graphs extends Component {


    graphmaker () {

        const returnable = (
            <div>
                    <Chart gap = "xxsmall" size={{"width" : "auto"} } thickness="xsmall"
                        bounds={[[0, 7], [0, 100]]}
                        values={[
                            { value: [7, 100], label: 'one hundred' },
                            { value: [6, 70], label: 'seventy' },
                            { value: [5, 60], label: 'sixty' },
                            { value: [4, 80], label: 'eighty' },
                            { value: [3, 40], label: 'forty' },
                            { value: [2, 0], label: 'zero' },
                            { value: [1, 30], label: 'thirty' },
                            { value: [0, 60], label: 'sixty' },
                            { value: [8, 100], label: 'one hundred' },
                            { value: [9, 70], label: 'seventy' },
                            { value: [10, 60], label: 'sixty' },
                            { value: [11, 80], label: 'eighty' },
                            { value: [12, 40], label: 'forty' },
                            { value: [13, 0], label: 'zero' },
                            { value: [14, 30], label: 'thirty' },
                            { value: [15, 60], label: 'sixty' },
                        ]}
                        aria-label="chart"
                    />
            </div>
        )

        return returnable;
    }


    render(props)
    {   
        if(!this.props) return 'aa';

  //     const confirmedData = this.props.a.map((data)=>({}))

        console.log(this.props)
        const returnable = (
            <div className={styles.container} >
                {this.graphmaker()}
            </div>
        )
        return returnable;
    }//render()


}export default Graphs

//////////////    */}   

