const applicants = require('./applicants');


// console.log(applicants);

// Applicants
const countApplicantsByGender = (gender) => {
    let count = 0;
    for (let applicant of applicants) {
        if (applicant.gender === gender) {
            count += 1;
        }
    }
    return count;
}


const countMaleApplicants = () => {
    return countApplicantsByGender("male")
}

const countFemaleApplicants = () => {
    return countApplicantsByGender("female")
}


const getStudentsWithoutCourses = () => {
    let studentWithout = [];
    for (let applicant of applicants) {
        if (applicant.courses.length === 0) {
            studentWithout.push(applicant)
        }
    }
    return studentWithout;
}

const getStudentsPaidNothing = () => {
    let unpaidSt = [];
    for (let applicant of applicants) {
        if (applicant.courses.length > 0) {
            if (applicant.paidCourses.length === 0) {
                unpaidSt.push(applicant)
            }
        }

    }
    return unpaidSt;
}

const checkIfCourseIsPaid = (course, paidCourses) => {
    let check = false;
    for (let code of paidCourses) {
        if (course.code === code) {
            check = true;
        }
    }
    return check;
}

const getStudentsPaidAll = () => {
    let paidStudents = [];

    for (let applicant of applicants) {

        if (applicant.courses.length > 0) {

            let checked = 0;

            for (let appCourse of applicant.courses) {

                if (checkIfCourseIsPaid(appCourse, applicant.paidCourses)) {
                    checked += 1;
                }
            }
            if (applicant.courses.length === checked) {
                paidStudents.push(applicant)
            }

        }
    }
    return paidStudents;
}

const getStudentByName = (name) => {
    let student = null;

    // console.log(applicants);

    for (let applicant of applicants) {
        if (applicant.firstName === name) {
            student = applicant;
        }
    }
    return student;
}

const getDurationSumForApplicantByName = (firstName) => {
    let student = getStudentByName(firstName);

    if (student) {
        let sum = 0;
        for (let course of student.courses) {
            sum += course.durationMonths;
        }

        return sum;
    }

    return null;
}


// Courses
// const checkIfDouble = (array, a) => {
//     let check = false;
//     for (let code of paidCourses) {
//         if (course.code === code) {
//             check = true;
//         }
//     }
//     return check;
// }


const getOriginalsOnly = (allCourses, course) => {
    let original = false;
    for(let c of allCourses) {
        if(c.code === course.code) {
            original = true;
        }
    }
    return original;
}

const getAllCourses = () => {
    let allCourses = [];
    for (let aplicant of applicants) {

        for (let course of aplicant.courses) {
            if(!getOriginalsOnly(allCourses, course)) {
                allCourses.push(course)
            }
        }
    }
    return allCourses;
}

const getCourses = () => {
    let allCourses = [];
    for (let aplicant of applicants) {

        for (let course of aplicant.courses) {
            allCourses.push(course)
        }
    }
    return allCourses;
}

const getCourseApplicantsCountByCode = (courseCode) => {
    let appCount = 0;
    for (let applicant of getCourses()) {
        if (applicant.code === courseCode) {
            appCount += 1;
        }
    }
    return appCount;
}

const theMostPopularCourse = () => {
    let FEDEV_3M_count = 0;
    let BEDEV_6M_count = 0;
    let VSCODE_1M_count = 0;
    let WP_3M_count = 0;
    let WP_6M_count = 0;

    for(let course of getCourses()) {
        if(course.code === "FEDEV_3M") {
            FEDEV_3M_count +=1;
        } if(course.code === "BEDEV_6M") {
            BEDEV_6M_count +=1;
        } if(course.code === "VSCODE_1M") {
            VSCODE_1M_count +=1;
        } if(course.code === "WP_3M") {
            WP_3M_count +=1;
        } if(course.code === "WP_6M") {
            WP_6M_count +=1;
        }
    }

    let popularArray = [FEDEV_3M_count,BEDEV_6M_count,VSCODE_1M_count,WP_3M_count, WP_6M_count] ;

    let checkingIndex = popularArray[0];

    for(let one of popularArray) {
        if(one > checkingIndex) {
            return one;
        }
    }
}


// const males = countMaleApplicants();
// console.log(`There are ${males} male students.\n`)

// const females = countFemaleApplicants();
// console.log(`There are ${females} male students.\n`)

//console.log(getCourses())

console.log(theMostPopularCourse())
// Continue...


//console.log(getCourseApplicantsCountByCode('WP_3M'))