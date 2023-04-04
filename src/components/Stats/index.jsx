import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import{
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
} from 'chart.js'
import './stats.css'

ChartJS.register(
    [LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip]
    )

function Stats() {

    const [activeListItem, setActiveListItem] = useState(0)
    const [selectedValue, setselectedValue] = useState("week")
    const [figureData, setFigureData] = useState([0,7,8,2,4,9,1,3,0])

    const temp = [
        "",
        "SAM",
        "DIM",
        "LUN",
        "MAR",
        "MER",
        "JEU",
        "VEN",
        "",
    ]
    
    const months = [
        "",
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUNE",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
        "",
    ]

    {/**
    * 
    * todo: set the figureData state based on activeListItem and selected Value filters also 
    * add two 0 at the start and end of the array to simulate the design
    *     
    */} 



    const handleSelectedChange =(e)=>{
        console.log(e.target.value);
        setselectedValue(e.target.value)
    } 

    const data = {
        labels : selectedValue=== "week"? temp : months,
        datasets:[
            {
                data:figureData,
                backgroundColor:'white',
                borderColor : '#FFFFFF',
                pointBorderColor:'transparent',
                cubicInterpolationMode: 'monotone',
                tension: 0.1
            }
        ]
    }

    const options = {
        plugins : {
            tooltip:{
                backgroundColor:'#fff',
                bodyColor:'#000',
                bodyFontSize:'30',
                padding:30,
                titleColor:'#000',
                titleFont:'bold',
                yAligne : 'top'
            },
            legend:false
        },
        scales:{
            x:{
                drawTicks : false,
                grid:{
                    display:false,
                    lineWidth:0,
                },
                border:{
                    display:false,
                },
                ticks: {
                    color: '#0F1322',
                    font: {
                        size: 18,
                    },
                  }
            }, 
            y:{
                display:false,
                
                grid:{
                    display:false,
                },
            },
            
        },
        maintainAspectRatio: false,
        responsive: true
    }

    return ( <div className="stats_card">
        <div className="stats-top">
            <div className="top-content">
                <div className="list">
                <div onClick={()=>{setActiveListItem(0)}}  className= {`item videos ${ activeListItem === 0 ? 'active' : ''}`} >Videos</div>
                <div onClick={()=>{setActiveListItem(1)}} className={`item exos ${ activeListItem === 1 ? 'active' : ''}`} >Exos</div>
                <div onClick={()=>{setActiveListItem(2)}} className= {`item jeux ${ activeListItem === 2 ? 'active' : ''}`} >Jeux</div>
                </div>

                <select value={selectedValue} onChange={handleSelectedChange} name="items" id="select-filter">
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
            </div>
            <div className="mini-stats">
                <p>Peak is <span> 120 minutes </span> <br /> Pit is <span> 25 minutes </span></p>
            </div>
        </div>


        <div className="stats-bottom">
            <Line className='chart' data={data}  options={options}></Line>
            
        </div>
    </div> );
}

export default Stats;