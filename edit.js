const inputData = '{"id":"e2a9ee13-9291-489d-92cf-3462de7b6ee5","type":"ADD_RECORD","app":{"id":"140","name":"Payment Request Form"},"record":{"Attachment":{"type":"FILE","value":[{"fileKey":"2022090819334248581932024643A392456A4A7F2AF541008","name":"47 Risa Ueda RBS fee.pdf","contentType":"application/pdf","size":"91852"}]},"Job_Code_Job_Title":{"type":"SINGLE_LINE_TEXT","value":": "},"Calculated_Difference_USD":{"type":"CALC","value":"0"},"Calculated_Budget_USD":{"type":"CALC","value":""},"Date_3":{"type":"DATE","value":"2022-09-02"},"Description_Budget":{"type":"RICH_TEXT","value":"<div><br /></div>"},"Date_1":{"type":"DATE","value":"2022-09-02"},"Date_2":{"type":"DATE","value":null},"YR":{"type":"NUMBER","value":"137.9"},"Lookup":{"type":"SINGLE_LINE_TEXT","value":""},"Employee_ID_Reimbursement":{"type":"NUMBER","value":"200137"},"Payment_Complete_Date":{"type":"DATE","value":null},"Planning_Sub_Category":{"type":"DROP_DOWN","value":"None Applicable"},"YU":{"type":"RADIO_BUTTON","value":"USD"},"Status":{"type":"STATUS","value":"Drafting"},"Assignee":{"type":"STATUS_ASSIGNEE","value":[{"code":"Eri.Yamaguchi@dentsu.com","name":"Eri Yamaguchi"}]},"PR_Marketing_Sub_Category":{"type":"DROP_DOWN","value":"None Applicable"},"Department_selection":{"type":"ORGANIZATION_SELECT","value":[{"code":"Operations_aHBkXr","name":"Operations"}]},"Payment_Method":{"type":"DROP_DOWN","value":"Check"},"Calculated_2":{"type":"CALC","value":"0"},"Calculated_1":{"type":"CALC","value":"0"},"Text_area":{"type":"MULTI_LINE_TEXT","value":""},"Payment_Method_Reimbursement":{"type":"DROP_DOWN","value":"Reimbursement"},"Requested_Amount":{"type":"NUMBER","value":""},"Job_Title_Lookup":{"type":"SINGLE_LINE_TEXT","value":""},"Budget_Amount_Disp":{"type":"CALC","value":""},"Link":{"type":"LINK","value":""},"$id":{"type":"__ID__","value":"993"},"Category":{"type":"DROP_DOWN","value":"Cat 6: No Charge to MOFA (管理費)"},"YEN":{"type":"CALC","value":"0"},"Vendor_Name":{"type":"SINGLE_LINE_TEXT","value":""},"Calculated_Payment_JPY":{"type":"CALC","value":"0"},"User_selection_4":{"type":"USER_SELECT","value":[]},"Calc_Sub_Category":{"type":"SINGLE_LINE_TEXT","value":"Not Applicable"},"User_selection_1":{"type":"USER_SELECT","value":[{"code":"Eri.Yamaguchi@dentsu.com","name":"Eri Yamaguchi"}]},"Amount_Budget":{"type":"NUMBER","value":""},"Updated_by":{"type":"MODIFIER","value":{"code":"Eri.Yamaguchi@dentsu.com","name":"Eri Yamaguchi"}},"BP":{"type":"DROP_DOWN","value":"Reimbursement"},"Created_datetime":{"type":"CREATED_TIME","value":"2022-09-08T19:33:00Z"},"Radio_button":{"type":"RADIO_BUTTON","value":"USD ($)"},"Number":{"type":"NUMBER","value":""},"BP_TT":{"type":"RADIO_BUTTON","value":"Payment"},"YU_Budget":{"type":"RADIO_BUTTON","value":"USD"},"Record_number":{"type":"RECORD_NUMBER","value":"993"},"Created_by":{"type":"CREATOR","value":{"code":"Eri.Yamaguchi@dentsu.com","name":"Eri Yamaguchi"}},"Text_4":{"type":"SINGLE_LINE_TEXT","value":""},"User_selection":{"type":"USER_SELECT","value":[]},"Calculated_Difference_JPY":{"type":"CALC","value":"0"},"Amount_JPY":{"type":"NUMBER","value":""},"Operations_Sub_Category":{"type":"DROP_DOWN","value":"None Applicable"},"Calculated_Budget_JPY":{"type":"CALC","value":"0"},"Amount":{"type":"NUMBER","value":""},"USD":{"type":"CALC","value":""},"Budget_Amount_USD":{"type":"NUMBER","value":""},"Date_0":{"type":"DATE","value":null},"Payment_Amount_Disp":{"type":"CALC","value":"15.5"},"$revision":{"type":"__REVISION__","value":"1"},"Date":{"type":"DATE","value":"2022-09-08"},"Job_Code":{"type":"SINGLE_LINE_TEXT","value":""},"Updated_datetime":{"type":"UPDATED_TIME","value":"2022-09-08T19:33:00Z"},"Calculated_Payment_USD":{"type":"CALC","value":""},"Amount_USD":{"type":"NUMBER","value":"15.5"},"Budget_Amount_JPY":{"type":"NUMBER","value":""},"Description_Payment":{"type":"MULTI_LINE_TEXT","value":"check # 47 "},"Lookup_4":{"type":"SINGLE_LINE_TEXT","value":""},"Lookup_3":{"type":"SINGLE_LINE_TEXT","value":"Risa Ueda"}},"recordTitle":"993","url":"https://jhla.kintone.com/k/140/show#record=993"}'

import { Console } from 'console';
import fetch from 'node-fetch';
import util from 'util';

const data = JSON.parse(inputData)

let errReturn = [];
const API_MAP = {
  'keys': [
    {
      "id": "0",
      "kintoneDomain": "jhla",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "Payment Request Form",
      "appID": 140,
      "key": "gk4FAf0VGse5Wm6sgMu5ycMExufdN9JJiURui5la",
      "auth": "dGVhbWFwcGxpQGtkZGlhLmNvbTozQDxFNC5QWiMz",
      "note": "SOURCE APP"
    },
    {
      "id": "1",
      "kintoneDomain": "tokyo-liaison",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "[DEV] Payment Request Form",
      "appID": 13,
      "key": "7060o71F0D7Yh9NNcgxItHZvVuKaOEycoeHJk4gU",
      "auth": "QWRtaW5pc3RyYXRvcjozeXVYKDIpTSFwfm5yOmFoV1BFW3A=",
      "note": "DEST APP"
    },

    {
      "id": "2",
      "kintoneDomain": "jhla",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "Job Code DB",
      "appID": 7,
      "key": "1xZAi96WsrUuwNY1ovHucRCpbPXLK33t2utqzQJp",
      "auth": "dGVhbWFwcGxpQGtkZGlhLmNvbTozQDxFNC5QWiMz",
      "note": "SOURCE APP JOB DATABASE"
    },
    {
      "id": "3",
      "kintoneDomain": "tokyo-liaison",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "[DEV] Job Code DB",
      "appID": 12,
      "key": "TTJWCzBDavOzLKPFSuGUkKEa4NjhqTgNhzpgIGu5",
      "auth": "QWRtaW5pc3RyYXRvcjozeXVYKDIpTSFwfm5yOmFoV1BFW3A=",
      "note": "DEST APP JOB DATABASE"
    },

    {
      "id": "4",
      "kintoneDomain": "jhla",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "Vendor Master",
      "appID": 147,
      "key": "ukGtFew4idIT0GgU82t3WfQjk8L4TeFHCN9Cz1cc",
      "auth": "dGVhbWFwcGxpQGtkZGlhLmNvbTozQDxFNC5QWiMz",
      "note": "SOURCE APP VENDOR DATABASE"
    },
    {
      "id": "5",
      "kintoneDomain": "tokyo-liaison",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "[DEV] Vendor Master",
      "appID": 11,
      "key": "YZUJgp7lnAjJVGLPDFKsn31ZtAA5SuBSJO6hH5D1",
      "auth": "QWRtaW5pc3RyYXRvcjozeXVYKDIpTSFwfm5yOmFoV1BFW3A=",
      "note": "DEST APP VENDOR DATABASE"
    },

    {
      "id": "6",
      "kintoneDomain": "jhla",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "Employee ID # Database",
      "appID": 47,
      "key": "QWwJvHi9X9AwXoax3oTGEJMMFiGhzap0W5admJIE",
      "auth": "dGVhbWFwcGxpQGtkZGlhLmNvbTozQDxFNC5QWiMz",
      "note": "SOURCE APP EMPLOYEE DATABASE"
    },
    {
      "id": "7",
      "kintoneDomain": "tokyo-liaison",
      "space": "N/A",
      "spaceID": 0,
      "guestSpace": false,
      "appName": "[DEV] Employee ID # Database",
      "appID": 10,
      "key": "CUqgqCKV48280LSsoyVQQWUXzUzB7QzdDzR3vyyP",
      "auth": "QWRtaW5pc3RyYXRvcjozeXVYKDIpTSFwfm5yOmFoV1BFW3A=",
      "note": "DEST APP EMPLOYEE DATABASE"
    },
  ]
};

const requests = {
  getAppFields: async (app) => {
    try {
      const url = app.guestSpace ? `guest/${app.spaceID}/` : '';
      const resp = await fetch(
        `https://${app.kintoneDomain}.kintone.com/k/${url}v1/app/form/fields.json?app=${app.appID}`,
        {
          method: 'GET',
          headers: {
            'X-Cybozu-Authorization': app.auth,
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        }
      );
      const json = await resp.json();
      return json.properties;
    } catch (error) {
      errReturn.push(error);
    }
  },
  getRecordsofApp: async (app, ret = [], base = 0, refID) => {
    try {
      const url = app.guestSpace ? `guest/${app.spaceID}/` : '';
      let offset = base * 500;
      const query = refID ? `Ref_ID = ${refID} order by $id asc limit 500 offset ${offset}` : `order by $id asc limit 500 offset ${offset}`;
      const resp = await fetch(
        `https://${app.kintoneDomain}.kintone.com/k/${url}v1/records.json?app=${app.appID}&query=${query}`,
        {
          method: 'GET',
          headers: {
            'X-Cybozu-Authorization': app.auth,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        }
      );
      const json = await resp.json();
      for (const rec of json.records) ret.push(rec);
        
      // check if we reached limit of request
      if (json.records.length === 500) return await requests.getRecordsofApp(app, ret, base + 1)
      else return ret;

    } catch (error) {
      errReturn.push(error);
    }
  },
  updateRecordByID: async (app, inputRecord) => {
    try {
      const url = app.guestSpace ? `guest/${app.spaceID}/` : '';
      const resp = await fetch(
        `https://${app.kintoneDomain}.kintone.com/k/${url}v1/record.json`,
        {
          method: 'PUT',
          headers: {
            'X-Cybozu-Authorization': app.auth,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          },
          body: JSON.stringify(inputRecord)
        }
      );
      return resp;
    } catch (error) {
      errReturn.push(error);
    }
  },
  addRecord: async (app, inputRecord) => {
    try {
      const url = app.guestSpace ? `guest/${app.spaceID}/` : '';
      const resp = await fetch(
        `https://${app.kintoneDomain}.kintone.com/k/${url}v1/records.json`,
        {
          method: 'POST',
          headers: {
            'X-Cybozu-Authorization': app.auth,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          },
          body: JSON.stringify(inputRecord)
        }
      );
      const json = await resp.json();
      return json;
    } catch (error) {
      errReturn.push(error);
    }
  },
  deleteRecord: async (app, record) => {
    try {
      const url = app.guestSpace ? `guest/${app.spaceID}/` : '';
      const resp = await fetch(
        `https://${app.kintoneDomain}.kintone.com/k/${url}v1/records.json`,
        {
          method: 'DELETE',
          headers: {
            'X-Cybozu-Authorization': app.auth,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          },
          body: JSON.stringify(record)
        }
      );
      const json = await resp.json();
      return json;
    } catch (error) {
      errReturn.push(error);
    }
  }
};


function findJobRecordID(jobCode, destRecords) {
  // Text = JOB CODE
  let dRecordID = -1
  for (const dRecord of destRecords) {
    if (dRecord['Text'].value && dRecord['Text'].value === jobCode) {
      dRecordID = dRecord['Record_number'].value;
    }
  }
  return dRecordID;
}

function findJobRecord(jobCode, destRecords) {
  // Text = JOB CODE
  let dRecordID = -1
  for (const dRecord of destRecords) {
    if (dRecord['Text'].value && dRecord['Text'].value === jobCode) {
      dRecordID = dRecord;
    }
  }
  return dRecordID;
}

function findVendorRecordID(name, destRecords) {
  // 文字列__1行__2 = VENDOR NAME
  let dRecordID = -1
  for (const dRecord of destRecords) {
    if (dRecord['文字列__1行__2'].value && dRecord['文字列__1行__2'].value === name) {
      dRecordID = dRecord['Record_number'].value;
    }
  }
  return dRecordID;
}

function findVendorRecord(name, destRecords) {
  // 文字列__1行__2 = VENDOR NAME
  let dRecordID = -1
  for (const dRecord of destRecords) {
    if (dRecord['文字列__1行__2'].value && dRecord['文字列__1行__2'].value === name) {
      dRecordID = dRecord;
    }
  }
  return dRecordID;
}

function findEmployeeRecordID(name, destRecords, sourceRecords) {
  // since only given name have to search emblpyee id number in source
  let employeeID = -1
  for (const sRecord of sourceRecords) {
    if (sRecord['Full_Name'].value && sRecord['Full_Name'].value === name) {
      employeeID = sRecord['Number'].value;
    }
  }

  // Full_Name = FULL NAME
  let dRecordID = -1
  for (const dRecord of destRecords) {
    if (dRecord['Number'].value && dRecord['Number'].value === employeeID) {
      dRecordID = dRecord['Record_number'].value;
    }
  }
  return dRecordID;
}

function findEmployeeRecord(name, destRecords) {
  // Full_Name = FULL NAME
  let dRecordID = -1
  for (const dRecord of destRecords) {
    if (dRecord['Full_Name'].value && dRecord['Full_Name'].value === name) {
      dRecordID = dRecord;
    }
  }
  return dRecordID;
}

async function main() {
// if add record
if (data.type === "ADD_RECORD") {
  
  const sourceApp = API_MAP.keys[0];
  const appToAdd =  API_MAP.keys[1];

  const sourceJobDB = API_MAP.keys[2];
  const destJobDB = API_MAP.keys[3];

  const sourceVendorDB = API_MAP.keys[4];
  const destVendorDB = API_MAP.keys[5];

  const sourceEmployeeDB = API_MAP.keys[6];
  const destEmployeeDB = API_MAP.keys[7];

  const sourceJobDBRecords = await requests.getRecordsofApp(sourceJobDB);
  const destJobDBRecords = await requests.getRecordsofApp(destJobDB);
  
  const sourceVendorDBRecords = await requests.getRecordsofApp(sourceVendorDB);
  const destVendorDBRecords = await requests.getRecordsofApp(destVendorDB);

  const sourceEmployeeDBRecords = await requests.getRecordsofApp(sourceEmployeeDB);
  const destEmployeeDBRecords = await requests.getRecordsofApp(destEmployeeDB);


  const addAppFields = await requests.getAppFields(appToAdd);
  const sourceAppKeys = Object.keys(data.record);
  const appFieldsKeys = Object.keys(addAppFields);

  const keysToAdd = sourceAppKeys.map((key) => {
    if (appFieldsKeys.includes(key) && 
      key !== '$id' &&
      key !== 'Record_number' &&
      key !== 'Updated_datetime' &&
      key !== 'Created_datetime' &&
      key !== 'Updated_by' &&
      key !== 'Attachment' &&
      key !== 'Created_by' &&
      key !== 'Assignee' &&
      key !== 'Job_Code' &&
      key !== 'Employee_ID_Reimbursement' &&
      key !== 'Number' &&
      key !== 'Employee_Lookup' &&
      key !== 'Planning_Sub_Category' &&
      key !== 'PR_Marketing_Sub_Category' &&
      key !== 'Operations_Sub_Category' &&
      key !== 'Status') return key;
    return false;
  });
  
  let content = {
    'app': appToAdd.appID,
    'records': []
  };
  
  let builder = {};
  for (const key of keysToAdd) {
    if (!key) continue;

    // check if we hit specific lookups
    if (key === 'Job_Title_Lookup') {
      // for job lookup first look to see if it exists in the dest database with the given title field
      let recordID = findJobRecordID(data.record['Job_Code'].value, destJobDBRecords)
      if (recordID !== -1) {
        builder[key] = {
          value: data.record[key].value
        };
      } else {
        // have to add the job to the database first
        let record = findJobRecord(data.record['Job_Code'].value, sourceJobDBRecords)
        if (record !== -1) {
          let content = {
            'app': destJobDB.appID,
            'records': [{
              'Text_0': {
                'value': record['Text_0'].value
              },
              'Text_1': {
                'value': record['Text_1'].value
              },
              'Text': {
                'value': record['Text'].value
              },
              'Text_2': {
                'value': record['Text_2'].value
              },
            }]
          };
          const addedRequest = await requests.addRecord(destJobDB, content);
          builder[key] = {
            value: data.record[key].value
          };
        }
      }
    } 
    else if (key === 'Lookup') {
      let recordID = findVendorRecordID(data.record['Lookup'].value, destVendorDBRecords)
      if (recordID !== -1) {
        builder[key] = {
          value: data.record[key].value
        };
      } else {
        // have to add the vendor to the database first
        let record = findVendorRecord(data.record['Lookup'].value, sourceVendorDBRecords)
        if (record !== -1) {
          let content = {
            'app': destVendorDB.appID,
            'records': [{
              '文字列__1行_': {
                'value': record['文字列__1行_'].value
              },
              '再委託申��の有無_0': {
                'value': record['再委託申請の有無_0'].value
              },
              'Radio_button': {
                'value': record['Radio_button'].value
              },
              'Date_1': {
                'value': record['Date_1'].value
              },
              'Date_2': {
                'value': record['Date_2'].value
              },
              'ラジオボタン_FTC': {
                'value': record['ラジオボタン_FTC'].value
              },
              'Text_2': {
                'value': record['Text_2'].value
              },
              'Text_3': {
                'value': record['Text_3'].value
              },
              'Text_0': {
                'value': record['Text_0'].value
              },
              '委託項目': {
                'value': record['委託項目'].value
              },
              'Date_0': {
                'value': record['Date_0'].value
              },
              'ラジオボタン': {
                'value': record['ラジオボタン'].value
              },
              ' 文字列__1行__0': {
                'value': record['文字列__1行__0'].value
              },
              '文字列__1行__1': {
                'value': record['文字列__1行__1'].value
              },
              'Date': {
                'value': record['Date'].value
              },
              'Text_area': {
                'value': record['Text_area'].value
              },
              '文字列__1行__2': {
                'value': record['文字列__1行__2'].value
              },
              'Number_0': {
                'value': record['Number_0'].value
              },
              'チェックボックス': {
                'value': record['チェックボックス'].value
              },
              'Text_area_0': {
                'value': record['Text_area_0'].value
              },
              'Text_area_1': {
                'value': record['Text_area_1'].value
              },
            }]
          };
          const addedRequest = await requests.addRecord(destVendorDB, content);
          builder[key] = {
            value: data.record[key].value
          };
        }
      }
    } 
    else if (key === 'Lookup_3' || key === 'Lookup_4') {
      let recordID = findEmployeeRecordID(data.record[key].value, destEmployeeDBRecords, sourceEmployeeDBRecords)
      if (recordID !== -1) {
        // use the full name of the destRecord
        let toAdd = -1;
        for (const findRecord of destEmployeeDBRecords) {
          if (findRecord['Record_number'].value && findRecord['Record_number'].value === recordID) {
            toAdd = findRecord['Full_Name'].value
          }
        }
        builder[key] = {
          value: toAdd === -1 ? data.record[key].value : toAdd
        };
      } else {
        // have to add the employee to the database first
        let record = findEmployeeRecord(data.record[key].value, sourceEmployeeDBRecords)
        if (record !== -1) {
          let content = {
            'app': destEmployeeDB.appID,
            'records': [{
              'First_Name': {
                'value': record['First_Name'].value
              },
              'Last_Name': {
                'value': record['Last_Name'].value
              },
              'Full_Name': {
                'value': record['Full_Name'].value
              },
              'Number': {
                'value': record['Number'].value
              },
              'Emp_Status': {
                'value': 'Active'
              },
              'Type': {
                'value': 'DEUSA'
              }
            }]
          }
          const addedRequest = await requests.addRecord(destEmployeeDB, content);
          builder[key] = {
            value: data.record[key].value
          };
        }
      }
    } else {
      builder[key] = {
        value: data.record[key].value
      };
    }
  }
  builder['Ref_ID'] = {
    value: data.record['Record_number'].value
  }
  content.records.push(builder);
  
  const addedRequest = await requests.addRecord(appToAdd, content);

  // check add request response.
  if (addedRequest.errors) {
    const err = new Error("Add Request Failed");
    errReturn.push(err);
    throw err;
  }
}

// if edit record
if (data.type === "UPDATE_RECORD") {
  
  const sourceApp = API_MAP.keys[0];
  const updateApp =  API_MAP.keys[1];
  const sourceRecordID = data.recordTitle

  const sourceJobDB = API_MAP.keys[2];
  const destJobDB = API_MAP.keys[3];

  const sourceVendorDB = API_MAP.keys[4];
  const destVendorDB = API_MAP.keys[5];

  const sourceEmployeeDB = API_MAP.keys[6];
  const destEmployeeDB = API_MAP.keys[7];

  const sourceJobDBRecords = await requests.getRecordsofApp(sourceJobDB);
  const destJobDBRecords = await requests.getRecordsofApp(destJobDB);
  
  const sourceVendorDBRecords = await requests.getRecordsofApp(sourceVendorDB);
  const destVendorDBRecords = await requests.getRecordsofApp(destVendorDB);

  const sourceEmployeeDBRecords = await requests.getRecordsofApp(sourceEmployeeDB);
  const destEmployeeDBRecords = await requests.getRecordsofApp(destEmployeeDB);
  
  const addAppFields = await requests.getAppFields(updateApp);
  
  const sourceAppKeys = Object.keys(data.record);
  const updateFieldsKeys = Object.keys(addAppFields);
  
  let foundRecord = -1
  // find record of app we have to delete
  const records = await requests.getRecordsofApp(updateApp, [], 0, sourceRecordID);
  for (const record of records) {
    if (record['Ref_ID'].value === sourceRecordID) {
      foundRecord = record
    }
  }

  if (foundRecord == -1 ) {
    output = {id: 1, errs: errReturn};
    return;
  }

  const keysToAdd = sourceAppKeys.map((key) => {
    if (updateFieldsKeys.includes(key) && 
      key !== '$id' &&
      key !== 'Record_number' &&
      key !== 'Updated_datetime' &&
      key !== 'Created_datetime' &&
      key !== 'Updated_by' &&
      key !== 'Attachment' &&
      key !== 'Created_by' &&
      key !== 'Assignee' &&
      key !== 'Job_Code' &&
      key !== 'Employee_ID_Reimbursement' &&
      key !== 'Number' &&
      key !== 'Employee_Lookup' &&
      key !== 'Planning_Sub_Category' &&
      key !== 'PR_Marketing_Sub_Category' &&
      key !== 'Operations_Sub_Category' &&
      key !== 'Status') return key;
    return false;
  });

  let content = {
    'app': updateApp.appID,
    'id': parseInt(foundRecord['Record_number'].value),
    'record': {}
  };

  let builder = {};
  for (const key of keysToAdd) {
    if (!key) continue;

    // check if we hit specific lookups
    if (key === 'Job_Title_Lookup') {
      // for job lookup first look to see if it exists in the dest database with the given title field
      let recordID = findJobRecordID(data.record['Job_Code'].value, destJobDBRecords)
      if (recordID !== -1) {
        builder[key] = {
          value: data.record[key].value
        };
      } else {
        // have to add the job to the database first
        let record = findJobRecord(data.record['Job_Code'].value, sourceJobDBRecords)
        if (record === -1) continue;
        let content = {
          'app': destJobDB.appID,
          'records': [{
            'Text_0': {
              'value': record['Text_0'].value
            },
            'Text_1': {
              'value': record['Text_1'].value
            },
            'Text': {
              'value': record['Text'].value
            },
            'Text_2': {
              'value': record['Text_2'].value
            },
          }]
        };
        const addedRequest = await requests.addRecord(destJobDB, content);
        builder[key] = {
          value: data.record[key].value
        };
      }
    } 
    else if (key === 'Lookup') {
      let recordID = findVendorRecordID(data.record['Lookup'].value, destVendorDBRecords)
      if (recordID !== -1) {
        builder[key] = {
          value: data.record[key].value
        };
      } else {
        // have to add the vendor to the database first
        let record = findVendorRecord(data.record['Lookup'].value, sourceVendorDBRecords)
        if (record === -1) continue;
        let content = {
          'app': destVendorDB.appID,
          'records': [{
            '文字列__1行_': {
              'value': record['文字列__1行_'].value
            },
            '再委託申請の有無_0': {
              'value': record['再委託申請の有無_0'].value
            },
            'Radio_button': {
              'value': record['Radio_button'].value
            },
            'Date_1': {
              'value': record['Date_1'].value
            },
            'Date_2': {
              'value': record['Date_2'].value
            },
            'ラジオボタン_FTC': {
              'value': record['ラジオボタン_FTC'].value
            },
            'Text_2': {
              'value': record['Text_2'].value
            },
            'Text_3': {
              'value': record['Text_3'].value
            },
            'Text_0': {
              'value': record['Text_0'].value
            },
            '委託項目': {
              'value': record['委託項目'].value
            },
            'Date_0': {
              'value': record['Date_0'].value
            },
            'ラジオボタン': {
              'value': record['ラジオボタン'].value
            },
            ' 文字列__1行__0': {
              'value': record['文字列__1行__0'].value
            },
            '文字列__1行__1': {
              'value': record['文字列__1行__1'].value
            },
            'Date': {
              'value': record['Date'].value
            },
            'Text_area': {
              'value': record['Text_area'].value
            },
            '文字列__1行__2': {
              'value': record['文字列__1行__2'].value
            },
            'Number_0': {
              'value': record['Number_0'].value
            },
            'チェックボックス': {
              'value': record['チェックボックス'].value
            },
            'Text_area_0': {
              'value': record['Text_area_0'].value
            },
            'Text_area_1': {
              'value': record['Text_area_1'].value
            },
          }]
        };
        const addedRequest = await requests.addRecord(destVendorDB, content);
        builder[key] = {
          value: data.record[key].value
        };
      }
    } 
    else if (key === 'Lookup_3' || key === 'Lookup_4') {
      let recordID = findEmployeeRecordID(data.record[key].value, destEmployeeDBRecords, sourceEmployeeDBRecords)
      if (recordID !== -1) {
        // use the full name of the destRecord
        let toAdd = -1;
        for (const record of destEmployeeDBRecords) {
          if (record['Record_number'].value && record['Record_number'].value === recordID) {
            toAdd = record['Full_Name'].value
          }
        }
        builder[key] = {
          value: toAdd === -1 ? data.record[key].value : toAdd
        };
      } else {
        // have to add the employee to the database first
        let record = findEmployeeRecord(data.record['Lookup'].value, sourceEmployeeDBRecords)
        if (record !== -1) {
          let content = {
            'app': destEmployeeDB.appID,
            'records': [{
              'First_Name': {
                'value': record['First_Name'].value
              },
              'Last_Name': {
                'value': record['Last_Name'].value
              },
              'Full_Name': {
                'value': record['Full_Name'].value
              },
              'Number': {
                'value': record['Number'].value
              },
              'Emp_Status': {
                'value': 'Active'
              },
              'Type': {
                'value': 'DEUSA'
              }
            }]
          }
          const addedRequest = await requests.addRecord(destEmployeeDB, content);
          builder[key] = {
            value: data.record[key].value
          };
        }
      }
    } else {
      builder[key] = {
        value: data.record[key].value
      };
    }
  }
  content.record = builder
  const updatedRequest = await requests.updateRecordByID(updateApp, content);
  if (updatedRequest.status !== 200) {
    const err = new Error("Update Request Failed");
    errReturn.push(err);
    throw err;
  }
}

// if delete record
if (data.type === "DELETE_RECORD") {
  const appToDelete =  API_MAP.keys[1];
  let refID = data.recordId
  let foundRecord = -1
  // find record of app we have to delete
  const records = await requests.getRecordsofApp(updateApp, [], 0, sourceRecordID);
  for (const record of records) {
    if (record['Ref_ID'].value === refID) {
      foundRecord = record
    }
  }
  if (foundRecord !== -1) {
    let content = {
      'app': appToDelete.appID,
      'ids': [parseInt(foundRecord['Record_number'].value)]
    };
    const deletedRequest = await requests.deleteRecord(appToDelete, content);
    if (deletedRequest.errors) {
      const err = new Error("Delete Request Failed");
      errReturn.push(err);
      throw err;
    }
  }
}
  
};

main();

// output = {id: 1, errs: errReturn};
console.log(errReturn)