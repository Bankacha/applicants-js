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
const getAllCourses = () => {
    return null;
}

const getCourseApplicantsCountByCode = (courseCode) => {
    return null;
}

const theMostPopularCourse = () => {
    return null;
}


// const males = countMaleApplicants();
// console.log(`There are ${males} male students.\n`)

// const females = countFemaleApplicants();
// console.log(`There are ${females} male students.\n`)

console.log(getDurationSumForApplicantByName("Applicant_7"))

// Continue...
