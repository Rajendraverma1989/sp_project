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
        this.fetchData('https://api.spaceXdata.com/v3/launches?limit=100');
        }

        fetchData = async (baseurl) => {
           let url = baseurl;
    
           if(this.props.filterData.launch === true)
           {
               url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true';
           }
           if(this.props.filterData.launch === true && this.props.filterData.landing === true)
           {
               url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true';
           }

           if(this.props.filterData.launch === true && this.props.filterData.landing === true && this.props.filterData.year)
           {
               url = 'https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year='+this.props.filterData.year;
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

