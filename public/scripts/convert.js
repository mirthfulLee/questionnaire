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

const add_diagnosisC = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'C7b1', diagnosis_content[0].select)
    add_col(columns, data_list, 'C7b21', diagnosis_content[0].confirms[0].select[0])
    add_col(columns, data_list, 'C7b22', diagnosis_content[0].confirms[0].select[1])
    add_col(columns, data_list, 'C7c1', diagnosis_content[1].choices[0].select)
    add_col(columns, data_list, 'C7c2', diagnosis_content[1].choices[1].select)
    add_col(columns, data_list, 'C7d1', diagnosis_content[2].choices[0].select)
    add_col(columns, data_list, 'C7d2', diagnosis_content[2].choices[1].select)
}

const add_diagnosisD = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'D6a', diagnosis_content[0].select)
    add_col(columns, data_list, 'D6b1', diagnosis_content[0].confirms[0].select[0])
    add_col(columns, data_list, 'D6b2', diagnosis_content[0].confirms[0].select[1])
}

const add_diagnosisE = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'E6a', diagnosis_content[0].select)
}

const add_diagnosisF = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'F6a', diagnosis_content[0].select)
    add_col(columns, data_list, 'F6b', diagnosis_content[0].confirms[0].select[0])
}

const add_diagnosisG = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'G4', diagnosis_content[0].select)
    add_col(columns, data_list, 'G4a', diagnosis_content[0].choices[1].select)
}

const add_diagnosisH = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'H7', diagnosis_content[0].select)
    add_col(columns, data_list, 'H7a', diagnosis_content[0].choices[1].select)
}

const add_diagnosisI = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'I3', diagnosis_content[0].select)
    add_col(columns, data_list, 'I3a', diagnosis_content[0].choices[1].select)
    add_col(columns, data_list, 'I3b', diagnosis_content[0].choices[2].select)
}

const add_diagnosisJ = function (columns, data_list, diagnosis_content) {
    add_col(columns, data_list, 'J3', diagnosis_content[0].select)
    add_col(columns, data_list, 'J3a', diagnosis_content[0].choices[1].select)
    add_col(columns, data_list, 'J3b', diagnosis_content[0].choices[2].select)
}

export function export_csv(json_data) {
    let columns = []
    let data_list = []
    // add detail info: detail_info
    add_detail_info(columns, data_list, json_data.detail_info)
    const file_name = `${json_data.detail_info.patient_name}_${json_data.detail_info.assess_date.getFullYear()}-${json_data.detail_info.assess_date.getMonth() + 1}-${json_data.detail_info.assess_date.getDate()}.csv`
    // question C:
    add_question_pairs(columns, data_list, json_data.questionC)
    add_diagnosisC(columns, data_list, json_data.diagnosis_contentC)

    // question D:
    add_question_pairs(columns, data_list, json_data.questionD)
    add_diagnosisD(columns, data_list, json_data.diagnosis_contentD)

    // question E:
    add_question_pairs(columns, data_list, json_data.questionE)
    add_diagnosisE(columns, data_list, json_data.diagnosis_contentE)

    // question F:
    add_question_pairs(columns, data_list, json_data.questionF)
    add_diagnosisF(columns, data_list, json_data.diagnosis_contentF)

    // question G:
    add_question_pairs(columns, data_list, json_data.questionG)
    add_diagnosisG(columns, data_list, json_data.diagnosis_contentG)

    // question H:
    add_question_pairs(columns, data_list, json_data.questionH)
    add_diagnosisH(columns, data_list, json_data.diagnosis_contentH)

    // question I:
    add_question_pairs(columns, data_list, json_data.questionI)
    add_diagnosisI(columns, data_list, json_data.diagnosis_contentI)

    // question J:
    add_question_pairs(columns, data_list, json_data.questionJ)
    add_diagnosisJ(columns, data_list, json_data.diagnosis_contentJ)

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

