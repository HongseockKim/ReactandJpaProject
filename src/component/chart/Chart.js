import React, {Component} from 'react';
import {Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis,} from 'recharts';
import styled from 'styled-components';
import BorderApi from "../api/AjaxApi";
import {Text} from "@chakra-ui/react";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            covide:undefined,
            loading: false
        }
    }


    componentDidMount() {
        const data = [];
        BorderApi.covideData().then(result=>{
            const data = [
                {name:result.seoul.countryName , x: parseInt(result.seoul.newCase) , pv: parseInt(result.seoul.newCase), amt: parseInt(result.seoul.totalCase)},
                {name:result.gyeonggi.countryName , x: parseInt(result.gyeonggi.newCase), pv: parseInt(result.gyeonggi.newCase), amt: parseInt(result.gyeonggi.totalCase)},
                {name:result.daejeon.countryName , x: parseInt(result.daejeon.newCase), pv: parseInt(result.daejeon.newCase), amt: parseInt(result.daejeon.totalCase)},
                {name:result.chungnam.countryName , x: parseInt(result.chungnam.newCase), pv: parseInt(result.chungnam.newCase), amt: parseInt(result.chungnam.totalCase)},
                {name:result.busan.countryName , x: parseInt(result.busan.newCase), pv: parseInt(result.busan.newCase), amt: parseInt(result.busan.totalCase)},
            ]
            this.setState({
                covide:data,
                loading: true
            })
        });
    }

    render() {
        const {covide,loading} = this.state;
        const Div = styled.div`
          padding:10px 20px;flex-basis:30%;
          & .covide-chart-wrap{
            width:500px;
          }
        `;
        return (
            <Div>
                <div className="covide-chart-wrap">
                <Text fontSize='4xl' style={{marginLeft: '100px'}}>코로나 현황</Text>
                {
                    loading &&
                    <ComposedChart width={500} height={400} data={covide} margin={{top: 20, right: 80, bottom: 20, left: 20,}}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" label={{ position: 'insideBottomRight', offset: 0 }} />
                        <YAxis label={{ angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" barSize={40} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                }
                </div>
            </Div>
        );
    }
}

export default Chart;