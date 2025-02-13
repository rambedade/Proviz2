import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const SplitChart = ({ data }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Split of Units Processed Today</h5>
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="passed" fill="#0d6efd" name="Passed" />
            <Bar dataKey="rejected" fill="#20c997" name="Rejected" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export const RejectionPieChart = ({ data }) => {
  const COLORS = ['#0d6efd', '#20c997'];
  
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Reasons For Rejection</h5>
        <div style={{ height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};