import React from 'react';
import { Download } from 'lucide-react';

export const Filters = ({ 
  selectedApplication, 
  setSelectedApplication,
  selectedLine,
  setSelectedLine,
  selectedReason,
  setSelectedReason,
  dateRange,
  setDateRange,
  mockData 
}) => (
  <div className="p-4 d-flex flex-wrap gap-3 align-items-center bg-light">
    <select 
      className="form-select" 
      style={{ width: 'auto' }}
      value={selectedApplication}
      onChange={(e) => setSelectedApplication(e.target.value)}
    >
      <option value="">Select Application</option>
      {mockData.applications.map(app => (
        <option key={app.value} value={app.value}>{app.label}</option>
      ))}
    </select>

    <select 
      className="form-select"
      style={{ width: 'auto' }}
      value={selectedLine}
      onChange={(e) => setSelectedLine(e.target.value)}
    >
      <option value="">Select Line Number</option>
      {mockData.lineNumbers.map(line => (
        <option key={line.value} value={line.value}>{line.label}</option>
      ))}
    </select>

    <select 
      className="form-select"
      style={{ width: 'auto' }}
      value={selectedReason}
      onChange={(e) => setSelectedReason(e.target.value)}
    >
      <option value="">Select Rejection Reason</option>
      {mockData.rejectionReasons.map(reason => (
        <option key={reason.value} value={reason.value}>{reason.label}</option>
      ))}
    </select>

    <input
      type="date"
      className="form-control"
      style={{ width: 'auto' }}
      value={dateRange}
      onChange={(e) => setDateRange(e.target.value)}
    />

    <button className="btn btn-primary ms-auto d-flex align-items-center gap-2">
      <Download size={16} />
      Download Data
    </button>
  </div>
);

