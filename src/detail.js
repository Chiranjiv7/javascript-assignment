import React from 'react';
import axios from 'axios';
export default class ComponentDetail extends React.Component{
    
    state = {
        joke:''
    }
    
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`http://api.icndb.com/jokes/${id}`)
          .then(res => {
              this.setState({
                  joke: res.data.value.joke
            })
        })
    }
   
    render()
    {
        return(
            <div>
                <h1>Detail</h1>
                {this.state.joke}
            </div>
        )
    }
}