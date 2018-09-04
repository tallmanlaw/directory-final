const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },

  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
const userInput = prompt('please enter a command');
if (userInput === 'print') {
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }
}

if (userInput === 'lookup') {
  const lookUpInfo = prompt('please enter an employee name');
  for (i = 0; i < employeeList.length; i++) {
    if (lookUpInfo === employeeList[i].name) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
}

if (userInput === 'contains') {
  const containsInfo = prompt('please enter a portion of the employee name');
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(containsInfo)) {
      render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
    }
  }
}

if (userInput === 'update') {
  const eName = prompt('please enter an employee name');
  const newNumber = prompt('enter the number you would you like to update, office or phone');
  if (newNumber === 'office') {
    const newOfficeNumber = prompt('please enter new number');
    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === eName) {
        employeeList[i].officeNum = newOfficeNumber
        render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
      }
    }
  } else if (newNumber === 'phone') {
    const eName = prompt('please enter an employee name');
    const newPhoneNumber = prompt('please enter new number');
    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === eName) {
        employeeList[i].officeNum = newPhoneNumber
        for (i = 0; i < employeeList.length; i++) {
          render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
        }
      }
    }
  }
}

if (userInput === 'add') {
  const addName = prompt('please enter employee name');
  const addOffice = prompt('please enter office number');
  const addTele = prompt('please enter telephone number');

  var addedEmployee = {
    name: addName,
    officeNum: addOffice,
    phoneNum: addTele
  }
  employeeList.push(addedEmployee);
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }
}

if (userInput === 'delete') {
  const deleteInfo = prompt('please enter employee name to be deleted');
  for (i = 0; i < employeeList.length; i++) {
    if (deleteInfo === employeeList[i].name) {
      employeeList[i].splice(deleteInfo);
    }
    render(employeeList[i].name, employeeList[i].officeNum, employeeList[i].phoneNum);
  }
}
if (userInput === 'print names') {
  for (i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
  }
}

let msg = 'false';
if (userInput === 'verify') {
  const verifyInfo = prompt('please enter an employee name');
  for (i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      msg = 'true';
    } 
  } render(msg);
} 





