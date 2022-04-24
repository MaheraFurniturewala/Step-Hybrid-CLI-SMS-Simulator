const program = require('commander');
const axios = require('axios');
program.version('0.0.1');

//Commands

const getCourseWork = function () {
    axios.get('http://localhost:8000/getCourseWork')
        .then(function (response) {
            courses = response.data.msg;
            courses.forEach(function (course) {

                console.log(course.title);
            })
        })
}
program
    .command('getCourseWork')
    .description('Gives the title and description of all the course work')
    .alias('gcw')
    .action(function () {
        getCourseWork();
    });


program.parse(process.argv);


