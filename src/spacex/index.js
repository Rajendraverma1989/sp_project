import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { Filter } from './filter';
import { DisplayItem } from './displayItem';
import { selectYear } from '../redux/filter/filter-action'

 class SpaceXPorxy extends React.Component {
constructor() {
    super();
    this.state={
        data:[]
    }
}

    componentDidMount() {
        this.fetchData();
        }

        fetchData = async (baseurl) => {
           let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
    
           if(this.props.filterData.year !== undefined )
           {
               url += '&launch_year='+this.props.filterData.year;
           }
           if(this.props.filterData.launch !== undefined)
           {
               url += '&launch_success='+this.props.filterData.launch;
           }
           if(this.props.filterData.landing !== undefined)
           {
               url += '&land_success='+this.props.filterData.landing;
           }
            if(url!==''){
                const response = await fetch(url);                
                var data = await response.json();
                this.setState({
                    data:data
                })
            } else {
                this.setState({
                    data:[]
                })
            }
           
                
        }

     render() {
            return(
                    <div className={'container'}>
                    <Filter
                    onClick= { this.fetchData }
                    />
                    <DisplayItem
                    data = {this.state.data}
                    />
                    </div>
            )
}
 }

 const mapStateToProps = state => ({
    filterData:state.Filter_Reducer
  });
  const mapDispatchToProps = dispatch => ({
    selectYear: data => dispatch(selectYear(data))
})  
  export const SpaceX = connect(mapStateToProps, mapDispatchToProps)(SpaceXPorxy);

