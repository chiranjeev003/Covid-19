import React, {Component} from 'react';
import {Select} from 'grommet';
import styles from './Dropdowntag.module.css'


class Dropdowntag extends Component {
    
    state = {
        selected: "Jharkhand"
    }

    render(props)
    {   if(!this.props.droplist) return '';
       
        const statePicker = (

        <div className={styles.container} >
            {
                <Select className={styles.dropdown}
                options={this.props.droplist}
                value={this.state.selected}
                onChange={({ option }) => {this.setState({selected: option}); this.props.handleProvinceChangeAppjs(option)} } ></Select>
            }
          </div>
        )
            return <div>{statePicker}</div>;
    }   

}//class ends
export default Dropdowntag;