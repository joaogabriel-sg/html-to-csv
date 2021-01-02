const csv = [];

const downloadCSV = (csv, filename) => {
  const csvFile = new Blob([ csv ], { type: 'text/csv' });

  const btnExport = document.querySelector('.btn-export');
  btnExport.download = filename;
  btnExport.href = window.URL.createObjectURL(csvFile);
}

const getColumnTextsInTheRow = (acc, column) => {
  acc.push(column.textContent);
  return acc;
}

const exportTableToCSV = (filename) => {
  const csv = [];
  const rows = [...document.querySelectorAll('table tr')];

  rows.forEach((row) => {
    const columns = [...row.querySelectorAll('th, td')];
    const datas = columns.reduce(getColumnTextsInTheRow, []).join(', ');
    csv.push(datas);
  });

  downloadCSV(csv.join('\n'), filename);
}

exportTableToCSV('users.csv');
