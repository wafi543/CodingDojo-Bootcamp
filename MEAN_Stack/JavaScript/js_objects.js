function challenge1 (students) {
    for (var i=0; i<students.length; i++) {
        console.log('Name: '+students[i].name+', Cohort: '+students[i].cohort)
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
// challenge1(students)


function challenge2 (users) {
    var employees = users['employees']
    var managers = users['managers']
    console.log('EMPLOYEES')
    for (var i=0; i<employees.length; i++) {
        var user = employees[i]
        var count = 0
        var first_name = user['first_name']
        var last_name = user['last_name']
        var count = first_name.length+last_name.length
        console.log('1 - '+last_name+', '+first_name+' - '+count)
    }
    console.log('MANAGERS')
    for (var i=0; i<managers.length; i++) {
        var user = managers[i]
        var count = 0
        var first_name = user['first_name']
        var last_name = user['last_name']
        var count = first_name.length+last_name.length
        console.log('1 - '+last_name+', '+first_name+' - '+count)
    }
}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
challenge2(users)