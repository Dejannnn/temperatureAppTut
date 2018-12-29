import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWEather} from '../action/index'
class SearchBar extends Component {
    constructor(props){

        super(props);

        this.state={term: ''}
        this.onChangeSearch=this.onChangeSearch.bind(this);
        this.subbmitFun=this.subbmitFun.bind(this);
    }



    onChangeSearch(event){

        this.setState({term: event.target.value});


    }
    subbmitFun(event){
        event.preventDefault();
        this.props.fetchWEather(this.state.term);
        this.setState({term: ""});


    }
    render() {

        return (
            <form onSubmit={this.subbmitFun} className="input-group">
                <input placeholder="This is fild " value={this.state.term} onChange={this.onChangeSearch}/>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-secoundary" >Submit</button>
                </span>
            </form>
        );
    }
}


function mapDespaychToProps(dispatch) {

    return bindActionCreators({fetchWEather}, dispatch)

}
export default connect(null,mapDespaychToProps)(SearchBar);
