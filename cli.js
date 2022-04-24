const program = require('commander');
const axios = require('axios');
program.version('0.0.1');

//Commands

const getCourseWork = function () {
    axios.get('http://localhost:8000/getCourseWork')
        .then(function (response) {
            courses = response.data.msg;
            courses.forEach(function (course) {
                console.log("Title: \t\t\t" + course.title + "\nDescription :" + "\t\t" + course.description + "\t\t" + "\n" + "Created At: " + "\t\t" + course.creationTime + "\n");
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

program
    .command('getSchedule')
    .description('getAll the Lecture, CorseWork Schedule for the day')
    .alias('sch')
    .action(function () {
        console.log("The schedule for the today is - ");
    });


program.parse(process.argv);


