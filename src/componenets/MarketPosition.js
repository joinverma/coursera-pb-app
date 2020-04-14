import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    return: -11,
    amt: 2400,
  },
  {
    name: 'Feb',
    return: 45,
    amt: 2210,
  },
  {
    name: 'Mar',
    return: 22,
    amt: 2290,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className='bar-chart-tooltip'>
        <p className='label'>{`${label} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};
export default class MktPositionBarChart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

  render() {
    return (
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis type='number' dataKey='return' name='return' unit='%' />
            <Tooltip></Tooltip>
            <Legend />
            <ReferenceLine y={0} stroke='#000' />
            <Bar dataKey='return' fill='#82ca9d'>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.return > 0 ? '#82ca9d' : 'rgb(220, 220, 220)'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
