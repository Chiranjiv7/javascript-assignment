import React from 'react';
import {Link} from 'react-router-dom';
export default class ComponentList extends React.Component{
   
    state = {
        ids: []
    }
    
    componentDidMount() {
        let randomids = [107,4,361,111,101,102,391,100,103]
        this.setState({
            ids:randomids.map((id,index) => {
                return <div key={id}><Link to={'/detail/'+id}>Detail {index+1}</Link></div>
            })
        })
    }
    
    render()
    {
        return(
            <div>
                <h1>List</h1>
                {this.state.ids}
            </div>
        )
    }
}