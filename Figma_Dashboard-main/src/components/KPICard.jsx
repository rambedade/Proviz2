import React from 'react';

export const KPICard = ({ icon: Icon, title, value, bgColor = 'bg-primary' }) => (
  <div className="col-md-3">
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className={`p-2 ${bgColor} rounded`}>
            <Icon className="text-white" size={24} />
          </div>
          <span className="text-muted">{title}</span>
        </div>
        <div className="h2 mb-0">{value}</div>
      </div>
    </div>
  </div>
);
