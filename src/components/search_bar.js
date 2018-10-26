import React, {Component} from 'react'

class SearchBar extends Component{
    render(){
        //return <input onChange={this.onInputChange}/>;
        //OR short error functions
        return <input onChange={event => console.log(event.target.value)}/>;
    }

    // onInputChange(event){
    //     console.log(event);
    // }
}

export default SearchBar