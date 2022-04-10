import json2xls from 'json2xls'
const fs = require('fs')

const export_excel = function (json){
    let xls = json2xls(json);

    fs.writeFileSync('data.xlsx', xls, 'binary');
}
