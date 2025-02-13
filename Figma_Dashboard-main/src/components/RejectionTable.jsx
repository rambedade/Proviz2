import React from 'react';

export const RejectionTable = ({ data }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-body">
      <h5 className="card-title mb-4">Rejection Details</h5>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Application</th>
              <th>Line Number</th>
              <th>Product</th>
              <th>Reason For Rejection</th>
              <th>Quantity</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id}>
                <td>{row.application}</td>
                <td>{row.lineNumber}</td>
                <td>{row.product}</td>
                <td>{row.rejectionReason}</td>
                <td>{row.quantity}</td>
                <td>{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

