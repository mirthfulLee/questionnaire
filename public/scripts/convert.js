const add_col = function (columns, data_list, col, value) {
    columns.push(col)
    if (value == null) value = '0'
    if (value === false) value = '0'
    if (value === true) value = '1'
    data_list.push(value)
}

const add_detail_info = function (columns, data_list, obj) {
    add_col(columns, data_list, 'patient_name', obj.patient_name)
    add_col(columns, data_list, 'patient_id', obj.patient_id)
    add_col(columns, data_list, 'start_time', obj.start_time)
    add_col(columns, data_list, 'assess_date', obj.assess_date)
}

const add_question_pairs = function (columns, data_list, question_list) {
    for (let q of question_list) {
        if (q.type === 'TF') {
            add_col(columns, data_list, q.id, q.select)
        } else if (q.type === 'PeriodTF') {
            add_col(columns, data_list, q.id + '1', q.having)
            add_col(columns, data_list, q.id + '2', q.had)
        } else if (q.type === 'OptionRow') {
            add_col(columns, data_list, q.id, q.select)
        } else if (q.type === 'MultiOptionRow') {
            for (let i = 0; i < q.options.length; i++) {
                add_col(columns, data_list, q.id + (i + 1), q.select[i])
            }
        } else if (q.type === 'InputRow') {
            add_col(columns, data_list, q.id, q.remark)
        } else {
            console.log('fault type defined:', q.type)
        }
    }
}

export function export_csv(json_data) {
    let columns = []
    let data_list = []
    // add detail info: detail_info
    add_detail_info(columns, data_list, json_data.detail_info)
    const file_name = `${json_data.detail_info.patient_name}_${json_data.detail_info.assess_date.getFullYear()}-${json_data.detail_info.assess_date.getMonth() + 1}-${json_data.detail_info.assess_date.getDate()}.csv`
    // question C:
    add_question_pairs(columns, data_list, json_data.questionC)
    add_col(columns, data_list, 'C7b1', json_data.diagnosis_contentC[0].select)
    add_col(columns, data_list, 'C7b21', json_data.diagnosis_contentC[0].confirms[0].select[0])
    add_col(columns, data_list, 'C7b22', json_data.diagnosis_contentC[0].confirms[0].select[1])
    add_col(columns, data_list, 'C7c1', json_data.diagnosis_contentC[1].choices[0].select)
    add_col(columns, data_list, 'C7c2', json_data.diagnosis_contentC[1].choices[1].select)
    add_col(columns, data_list, 'C7d1', json_data.diagnosis_contentC[2].choices[0].select)
    add_col(columns, data_list, 'C7d2', json_data.diagnosis_contentC[2].choices[1].select)

    // transfer list to csv data
    let csv_data = ""
    console.log(columns)
    console.log(data_list)
    for (const col of columns) {
        csv_data += col + ','
    }
    csv_data += '\r\n'
    for (const value of data_list) {
        csv_data += value + ','
    }
    console.log('csv file saved')
    let urlObject = window.URL || window.webkitURL || window;
    let export_blob = new Blob([csv_data]);
    let save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = file_name;
    save_link.click();
}

