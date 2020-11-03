import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { selectYear } from '../../redux/filter/filter-action';
import { selectLaunch } from '../../redux/filter/filter-action';
import { selectLanding } from '../../redux/filter/filter-action';

 class DisplayItemPorxy extends React.Component {

  render() {
  return(
   this.props.data &&  this.props.data.length? <div className='displayContainer'>
     <div className='displayitem'>
               {
                 this.props.data && this.props.data.map( (item, i) => {                
                       return <div key={i} className='list'>
                         <div className={'imageBox'}>
                        <img src={item.links.mission_patch} width={175} className={'showImage'} alt='abc'></img>
                        </div>
                        <div className={'textcontainer'}>
                            <span className={'name'}> {item.mission_name}#{item.flight_number}</span>
                            <div className={'launchyear'}> Mission Ids:</div>
                            <ul className={'uili'}>
                            {item.mission_id.map((val, i) => {
                              return <li key={i} className={'launchyear1'}>{val}</li>
                            })}
                            </ul>
                          <div className={'launchyear'}> Launch Year: <span className={'textcolor'}>{item.launch_year}</span></div> 
                          <div className={'launchyear'}> Successfull Launch: <span className={'textcolor'}>{item.launch_success? 'true': 'false'}</span></div>
                          <div className={'launchyear'}> Successfull Landing: <span className={'textcolor'}>{item.launch_landing? 'true': 'false'}</span></div>
                        </div>                                      
                        </div>        
             })
               }  
               </div>             
       </div>:
       <div className={'displayContainer'}>
       <h2>YOU DO NOT HAVE ANY RECORDS  </h2>
       </div>
);
}
}



 const mapStateToProps = state => ({
    filterData:state.Filter_Reducer
  });
  const mapDispatchToProps = dispatch => ({
    selectYear: data => dispatch(selectYear(data)),
    selectLaunch: data => dispatch(selectLaunch(data)),
    selectLanding: data => dispatch(selectLanding(data))
})  
  export const DisplayItem = connect(mapStateToProps, mapDispatchToProps)(DisplayItemPorxy);

