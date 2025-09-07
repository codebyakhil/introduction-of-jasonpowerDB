function getEmpIdJson() {
  let empId = document.getElementById("empId").value;
  return JSON.stringify({ empId });
}

function saveRecord() {
  let jsonStr = {
    empId: document.getElementById("empId").value,
    empName: document.getElementById("empName").value,
    department: document.getElementById("department").value,
    salary: document.getElementById("salary").value
  };

  let putReq = createPUTRequest(connToken, JSON.stringify(jsonStr), dbName, relName);
  executeCommandAtGivenBaseUrl(putReq, jpdbBaseURL, jpdbIML, true);
  document.getElementById("result").innerText = "Record Saved!";
}

function getRecord() {
  let getReq = createGET_BY_KEYRequest(connToken, dbName, relName, getEmpIdJson());
  let resJson = executeCommandAtGivenBaseUrl(getReq, jpdbBaseURL, jpdbIRL, false);
  document.getElementById("result").innerText = JSON.stringify(resJson.data, null, 2);
}

function updateRecord() {
  let jsonStr = {
    empId: document.getElementById("empId").value,
    empName: document.getElementById("empName").value,
    department: document.getElementById("department").value,
    salary: document.getElementById("salary").value
  };

  let updateReq = createUPDATERecordRequest(connToken, JSON.stringify(jsonStr), dbName, relName, getEmpIdJson());
  executeCommandAtGivenBaseUrl(updateReq, jpdbBaseURL, jpdbIML, true);
  document.getElementById("result").innerText = "Record Updated!";
}
