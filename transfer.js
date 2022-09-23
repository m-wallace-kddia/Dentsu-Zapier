
import { Console } from 'console';
import fetch from 'node-fetch';
import util from 'util';

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
const sourceAppFields = await requests.getAppFields(sourceApp)
const sourceAppKeys = Object.keys(sourceAppFields);
const appFieldsKeys = Object.keys(addAppFields);

const sourceRecords = await requests.getRecordsofApp(sourceApp);

for await (const curRecord of sourceRecords) {

    if (Date.parse(curRecord['Date_3'].value) < Date.parse('2022-04-01') ) continue

    const keysToAdd = sourceAppKeys.map((key) => {
    if (appFieldsKeys.includes(key) && 
        key !== '$id' &&
        key !== 'Record_number' &&
        key !== 'Updated_datetime' &&
        key !== 'Created_datetime' &&
        key !== 'Updated_by' &&
        key !== 'Attachment' &&
        key !== 'Created_by' &&
        key !== 'Categories' &&
        key !== 'Assignee' &&
        key !== 'Job_Code' &&
        key !== 'Employee_ID_Reimbursement' &&
        key !== 'Number' &&
        key !== 'Employee_Lookup' &&
        key !== 'Field_group_0' &&
        key !== 'Approval_Signature_Related_records' &&
        key !== 'Field_group_Payment_Reimbursement' &&
        key !== 'W9_related_records' &&
        key !== 'Planning_Sub_Category' &&
        key !== 'PR_Marketing_Sub_Category' &&
        key !== 'Field_group_DL_ACCT_TEAM' &&
        key !== 'Field_group_Budget' &&
        key !== 'Operations_Sub_Category' &&
        key !== 'FOR_SYSTEM_USE' &&
        key !== 'ACCOUNTING_USE_ONLY' &&
        key !== 'ACCOUNTING_USE_ONLY' &&
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
        let recordID = findJobRecordID(curRecord['Job_Code'].value, destJobDBRecords)
        if (recordID !== -1) {
        builder[key] = {
            value: curRecord[key].value
        };
        } else {
        // have to add the job to the database first
        let record = findJobRecord(curRecord['Job_Code'].value, sourceJobDBRecords)
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
            value: curRecord[key].value
            };
        }
        }
    } 
    else if (key === 'Lookup') {
        let recordID = findVendorRecordID(curRecord['Lookup'].value, destVendorDBRecords)
        if (recordID !== -1) {
        builder[key] = {
            value: curRecord[key].value
        };
        } else {
        // have to add the vendor to the database first
        let record = findVendorRecord(curRecord['Lookup'].value, sourceVendorDBRecords)
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
            value: curRecord[key].value
            };
        }
        }
    } 
    else if (key === 'Lookup_3' || key === 'Lookup_4') {
        let recordID = findEmployeeRecordID(curRecord[key].value, destEmployeeDBRecords, sourceEmployeeDBRecords)
        if (recordID !== -1) {
        // use the full name of the destRecord
        let toAdd = -1;
        for (const findRecord of destEmployeeDBRecords) {
            if (findRecord['Record_number'].value && findRecord['Record_number'].value === recordID) {
            toAdd = findRecord['Full_Name'].value
            }
        }
        builder[key] = {
            value: toAdd === -1 ? curRecord[key].value : toAdd
        };
        } else {
        // have to add the employee to the database first
        let record = findEmployeeRecord(curRecord[key].value, sourceEmployeeDBRecords)
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
            value: curRecord[key].value
            };
        }
        }
    } else {
        builder[key] = {
        value: curRecord[key].value
        };
    }
    }
        builder['Ref_ID'] = {
        value: curRecord['Record_number'].value
    }
    content.records.push(builder);

    const addedRequest = await requests.addRecord(appToAdd, content);
}


}

main();
