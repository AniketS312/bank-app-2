import React, { useEffect, useRef, useState } from "react";
import * as d3 from 'd3';

import classes from './Chart.module.css'


function Chart(props) {
    const pieRef = useRef()
// Create expense and revenue data
    const data = [{name: 'Revenue', value: props.revenue}, {name: 'Expense', value: props.expense}];
// Fill in svg
    useEffect(()=> {
    // Svg Container
        const w = 200;
        const h = 200;
        const radius = w/ 2;
        const svg = d3.select(pieRef.current)
            .attr('width', w)
            .attr('height', h)
            // .style('margin-top', '400px')
        
        // initialize chart
        const formattedData = d3.pie().value(d => d.value)(data);
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);
        const color = d3.scaleOrdinal().range([ '#8be04e', '#fd7f6f'])

        // Set up svg data
        svg.selectAll()
            .data(formattedData)
            .join('path')
            .attr('d', arcGenerator)
            // Centers path in svg elements
            .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")")
            .attr('fill', d => color(d.value))
            .style('opacity', 0.7)

        // Set up annotations - MIGHT NOT NEED
        // svg.selectAll()
        //     .data(formattedData)
        //     .join('text')
        //     .text(d => d.data.name)
        //     .attr('transform', d => `translate(${arcGenerator.centroid(d)})`)
        //     .style('text-anchor', 'middle')
    },[data])


// Build the pie chart  


    return ( 
        <div id="chart" className={classes.chart}>
                <h5>Monthly Breakdown</h5>
            <div className={classes['chart-info']}>
                <svg ref={pieRef}>
                </svg>
                <div>
                    <ChartInfo 
                    amount={`$${props.revenue}`}
                    info='Revenue'
                    color={classes.revenue}
                    />
                    <ChartInfo 
                    amount={`$${props.expense}`}
                    info='Expenses'
                    color={classes.expense}
                    />
                </div>
            </div>
        </div>
    );
}

function ChartInfo(props) {
    return (
        <div className={classes.info}>
            <span className={props.color}></span>
            <h4>{props.amount}</h4>
            <p>{props.info}</p>
        </div>
    )
}

export default Chart;