const { push } = require('./applicants');
const applicants = require('./applicants');


// console.log(applicants);

// Applicants
const countApplicantsByGender = (gender) => {
    // let appByGender = [];
    let count = 0;
    for (let applicant of applicants) {
        if (applicant.gender === gender) {
            // appByGender.push(applicant);
            count += 1;
        }
    }
    return count;
}


const countMaleApplicants = () => {
    return countApplicantsByGender('male')
}

const countFemaleApplicants = () => {
    return countApplicantsByGender('female')
}


const getStudentsWithoutCourses = () => {
    let studentsWithoutCourses = [];
    for (let applicant of applicants) {
        if (applicant.courses.length === 0) {
            studentsWithoutCourses.push(applicant);
        }
    }
    return studentsWithoutCourses;
}

const getStudentsPaidNothing = () => {
    let studentsPaidNothing = [];
    for (let applicant of applicants) {
        if (applicant.paidCourses.length === 0) {
            studentsPaidNothing.push(applicant);
        }
    }
    return studentsPaidNothing;
}

const checkIfItsPaid = (course, paidCourses) => {
    let isPaid = false;
    for (let code of paidCourses) {
        if (code === course.code) {
            isPaid = true;
        }
    }
    return isPaid;
}

const getStudentsPaidAll = () => {
    let studentsPaidAll = [];
    for (let applicant of applicants) {

        if (applicant.courses.length > 0) {
            let count = 0;

            for (let appCourse of applicant.courses) {
                if (checkIfItsPaid(appCourse, applicant.paidCourses)) {
                    count += 1;
                }
            }
            if (applicant.courses.length === count) {
                studentsPaidAll.push(applicant);
            }
        }

    }
    return studentsPaidAll;
}

const getStudentByName = (name) => {
    for (let applicant of applicants) {
        if (applicant.firstName === name) {
            return applicant;
        }
    }
}

const getDurationSumForApplicantByName = (firstName) => {

    for (let applicant of applicants) {
        if (applicant.firstName === firstName) {
            let durationSum = 0;
            for (let course of applicant.courses) {
                durationSum = durationSum + course.durationMonths;
            }
            return durationSum;
        }
    }
}

const getAllCourses = () => {
    let allCourses = [];
    for (let applicant of applicants) {

        for (let course of applicant.courses) {
            allCourses.push(course);
        }
    }
    return allCourses;
}


const getCourseApplicantsCountByCode = (courseCode) => {
    let count = 0;
    for (let course of getAllCourses()) {
        if (course.code === courseCode) {
            count += 1;
        }
    }
    return count;
}

// const getCourseApplicantsCountByCode = (courseCode) => {
//     for (let applicant of applicants) {

//         let count = 0;

//         for (let course of applicant.courses) {
//             if (course.code === courseCode) {
//                 count += 1;
//             }
//         }
//         return count;
//     }
// }


const theMostPopularCourse = () => {
    let theMostPop; 
    for(let course of getAllCourses()) {             
       
        if( getCourseApplicantsCountByCode(course.code[1]) < getCourseApplicantsCountByCode(course.code)) {
            theMostPop = getCourseApplicantsCountByCode(course.code);
        }
  }  
  return theMostPop;
}




// const theMostPopularCourse = () => {
//     let theMostPopular = [];
//     let FEDEV_3M_count = getCourseApplicantsCountByCode('FEDEV_3M');
//     let BEDEV_6M_count = getCourseApplicantsCountByCode('BEDEV_6M');
//     let VSCODE_1M_count = getCourseApplicantsCountByCode('VSCODE_1M');
//     let WP_6M_count = getCourseApplicantsCountByCode('WP_6M');
//     let WP_3M_count = getCourseApplicantsCountByCode('WP_3M');

//     let popularArray = [FEDEV_3M_count,BEDEV_6M_count,VSCODE_1M_count,WP_3M_count, WP_6M_count] ;

//     let checkingIndex = popularArray[0];

//     for(let one of popularArray) {
//         if(one > checkingIndex) {
//             return one;
//         }
//     }
// }



//console.log(getCourseApplicantsCountByCode('BEDEV_6M'))
//console.log(getAllCourses())
console.log(theMostPopularCourse())