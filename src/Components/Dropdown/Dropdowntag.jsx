import React, {Component} from 'react';
import { fetchDistrictName, fetchDailyData } from '../../api';
import {Select, Grommet} from 'grommet';


class Dropdowntag extends Component {



render()
{

    const dataDownloaded = fetchDistrictName()
    if(!dataDownloaded) return <div>Failed to load dropdown</div>
    console.log(dataDownloaded)

    return <div>dodo</div>;

}

}
export default Dropdowntag;