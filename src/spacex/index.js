import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { selectYear } from '../redux/filter/filter-action'

 class SpaceXPorxy extends React.Component {

    componentDidMount() {
        this.props.selectYear('2020');
        }

     render() {
            return(
                    <nav className="nav-wrapper">
                    <h1>
                        {this.props.filterData}    
                    </h1>  
                    </nav>  
            )
}
 }


 const mapStateToProps = state => ({
    filterData:state.Filter_Reducer.year
  });
  const mapDispatchToProps = dispatch => ({
    selectYear: data => dispatch(selectYear(data))
})  
  export const SpaceX = connect(mapStateToProps, mapDispatchToProps)(SpaceXPorxy);

