import Pie from './pie'
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'
import Graph from './graph';


const Carloan=()=>{
    
    
    let totali=0;
    const loanEmi=()=>{
        const monthlyInterestRate = (loan.r / 12) / 100;

        // Convert loan term to months
        const loanTermInMonths = loan.t ;
      
        // Calculate EMI using the formula
        const emi = (loan.p * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermInMonths)) /
                    (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1);
                    
                    const TotalInterestPayable=Math.ceil((emi * loanTermInMonths) - loan.p );
        // setintrest(TotalInterestPayable);
        totali=TotalInterestPayable;
       const total=Math.floor(parseInt(loan.p)+TotalInterestPayable);

                    return <>
                    <h3>Loan EMI :- {Math.ceil(emi)}</h3>
                <h4>Total Interest Payable:- {TotalInterestPayable} </h4>
                <h4>
                Total Payment=(Principal + Interest) :- {total}
                </h4>
                    </>; 
                    
    }

    const Pie=(props)=>{

        let TotalIntrest =totali;
        let PrincipleAmount =loan.p;
        
    
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

    const [loan ,setloan]=useState({p:0,r:0,t:0});
    return (
        <>
        <div className="params"> 
            <label>Car Loan Amount : </label>
            <span className='inps'><input type='number' value={loan.p} onChange={e=>{setloan({...loan, p:e.target.value });}}></input> ₹</span>
            <div className='my-2'> <input className='slidbar' type='range' min={0} max={2000000} value={loan.p} onChange={e=>{setloan({...loan, p:e.target.value })}}></input></div>
        </div>

        <div className="params">
            <label>Interest Rate&nbsp;&nbsp;</label>
            <span className='inps'><input type='number' value={loan.r} onChange={e=>{setloan({...loan, r:e.target.value }); }}></input> ₹</span>
            <div className='my-2'> <input className='slidbar' type='range' min={0} max={100} value={loan.r} onChange={e=>{setloan({...loan, r:e.target.value })}}></input></div>
        </div>

        <div className="params">
            <label>Loan Tenure&nbsp;&nbsp;</label>
            <span className='inps'><input type='number' value={loan.t} onChange={e=>{setloan({...loan, t:e.target.value })}}></input> ₹</span>
            <div className='my-2'> <input className='slidbar' type='range' min={0} max={84} value={loan.t} onChange={e=>{setloan({...loan, t:e.target.value })}}></input></div>
        </div>

        {loanEmi()}
      
        <Pie/>
        <Graph p={loan.p} t={loan.t/12} r={loan.r}/>

        </>
    )
}

export default Carloan;