export const mockData = {
    applications: [
      { value: 'app1', label: 'Application 1' },
      { value: 'app2', label: 'Application 2' },
      { value: 'app3', label: 'Application 3' }
    ],
    lineNumbers: [
      { value: 'line1', label: 'Line 1' },
      { value: 'line2', label: 'Line 2' },
      { value: 'line3', label: 'Line 3' }
    ],
    rejectionReasons: [
      { value: 'wrong_price', label: 'Incorrect Price' },
      { value: 'wrong_coding', label: 'Missing Coding' }
    ],
    tableData: [
      { id: 1, application: 'Application 1', lineNumber: 'Line 1', product: 'Party Pack', rejectionReason: 'Wrong Coding', quantity: 10, time: '01/02/2024' },
      { id: 2, application: 'Application 2', lineNumber: 'Line 2', product: 'Tub', rejectionReason: 'Wrong Price', quantity: 12, time: '01/02/2024' },
      { id: 3, application: 'Application 3', lineNumber: 'Line 3', product: 'Party Pack', rejectionReason: 'Wrong Factory Code', quantity: 8, time: '01/02/2024' },
      
    ],
    splitData: [
      { name: 'Party Pack', passed: 90, rejected: 65 },
      { name: 'Tub', passed: 55, rejected: 92 }
    ],
    pieData: [
      { name: 'Incorrect Price', value: 52 },
      { name: 'Missing Coding', value: 48 }
    ]
  };