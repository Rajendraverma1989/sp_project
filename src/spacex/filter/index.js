import React from 'react';
import { connect } from 'react-redux';
import './styles.css';
import { selectYear } from '../../redux/filter/filter-action';
import { selectLaunch } from '../../redux/filter/filter-action';
import { selectLanding } from '../../redux/filter/filter-action';

 class FilterPorxy extends React.Component {
     constructor () {
         super();
         this.years = [2006,2007, 2008,2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
     }
    
     onClickyear = (val) => {
        const property = document.getElementsByClassName('listitem');

        for (const key in property) {
            if (property.hasOwnProperty(key)) {
                const element = property[key];
                element.style.backgroundColor = '#c5e384';          
            }
        }
        document.getElementById(val).style.backgroundColor='#13F571';
        this.props.selectYear(val);
        setTimeout(() => {
            this.props.onClick('');
          }, 0);
     }     

     onClickLaunch = (val, item) => {
        document.getElementsByClassName('listitem1')[0].style.backgroundColor = '#c5e384';
        document.getElementsByClassName('listitem1')[1].style.backgroundColor = '#c5e384';
        document.getElementsByClassName('listitem1')[val].style.backgroundColor = '#13F571';
        this.props.selectLaunch(item);
        setTimeout(() => {
            this.props.onClick('');
          }, 0);
       
     }

     onClickLand = (val, item) => {
        document.getElementsByClassName('listitem2')[0].style.backgroundColor = '#c5e384';
        document.getElementsByClassName('listitem2')[1].style.backgroundColor = '#c5e384';
        document.getElementsByClassName('listitem2')[val].style.backgroundColor = '#13F571';
        this.props.selectLanding(item);
        setTimeout(() => {
            this.props.onClick('');
          }, 0);
     }


     render() {
            return(
                    <div className= {'filterContainer'}>
                       <div className= {'displayfilters'}>
                        <div className={'filters'}> Filters</div>
                        <div className={'launchyears'}> Launch Years</div>
                        <hr/>
                        <div className={'showfilters'}>
                        {
                            this.years.map((item, i) =>{
                               return <div id={item} key={i} className={'listitem'} onClick= {() => this.onClickyear(item)}>
                                { item }
                                </div>
                            })
                        }
                        </div>

                        <div className={'launchyears'}> Successful Launch</div>
                        <hr/>
                        <div className={'showfilters'}>                         
                            <div className={'listitem1'} onClick= {() => this.onClickLaunch(0, true)}>
                                True
                            </div>
                            <div className={'listitem1'} onClick= {() => this.onClickLaunch(1, false)}>
                                False
                            </div>                    
                        </div>

                        <div className={'launchyears'}> Successful Landing</div>
                        <hr/>
                        <div className={'showfilters'}>                       
                            <div className={'listitem2'} onClick= {() => this.onClickLand(0, true)}>
                                True
                            </div>
                            <div  className={'listitem2'} onClick= {() => this.onClickLand(1, false)}>
                                False
                            </div>
                        </div>
                        
                    </div> 
                    </div>  
            )
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
  export const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterPorxy);

