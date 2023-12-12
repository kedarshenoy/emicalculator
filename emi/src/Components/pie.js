import Chart from 'chart.js/auto'
import { useEffect, useRef } from 'react';
// var piechart = require('piechart');
const Pie=(props)=>{

    let TotalIntrest =1250;
    let PrincipleAmount =10000;
    

    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()

        }
        const myChartRef =chartRef.current.getContext('2d');
        chartInstance.current =new Chart(myChartRef,{
            type:'pie',
            data:{
                labels:["Total Intrest ",'Principle Amount'],
                datasets :[
                    {
                        data:[TotalIntrest,PrincipleAmount],
                        backgroundColor:[
                            'rgb(255,99,132)',
                            'rgb(54,162,235)',
                            
                        ],

                    }
                ]
            }
        })
        return ()=>{
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[])


    return(
        <div id='piechart'>
            <canvas ref={chartRef} style={{width:'100px',height:'100px'}}/>
        </div>

    )
        }

export default Pie        