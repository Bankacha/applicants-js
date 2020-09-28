const { push } = require('./applicants');
const applicants = require('./applicants');


// console.log(applicants);

// Applicants
const countApplicantsByGender = (gender) => {
    count = 0;
    for(let applicant of applicants) {
        if(applicant.gender === gender) {
            count +=1
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
    let noCoursesStudents = [];
    for(let applicant of applicants) {
        if(applicant.courses.length === 0) {
            noCoursesStudents.push(applicant);
        }
    }
    return noCoursesStudents;
}

const getStudentsPaidNothing = () => {
    let noPayers = [];
    for(let applicant of applicants) {
        // if(applicant.courses.length > 0) {
            if (applicant.paidCourses.length === 0) {
                noPayers.push(applicant);
            }
        }
    // }
    return noPayers;
}

const checkIfItsPaid = () => {
    for(let applicant of applicants) {
        let payed = false;
        for (let course of applicant.courses) {
            if(course.length === applicant.paidCourses.length) {
                payed = true;
            }
        }
        return payed;
    }

}

const getStudentsPaidAll = () => {
    let payedArr = [];
    for(let applicant of applicants) {
        if(checkIfItsPaid(applicant)) {
            payedArr.push(applicant);
        } 
    }
    return payedArr;
}

const getStudentByName = (name) => {
    let student;
    for(let applicant of applicants) {
        if(applicant.firstName === name) {
            student = applicant;
        }
    }
    return student;
}

const getDurationSumForApplicantByName = (name) => {
    
    for(let applicant of applicants) {
        if(applicant.firstName === name) {
            let sumDuraion = 0;
            for(let course of applicant.courses) {
                sumDuraion += course.durationMonths;
            }
            return sumDuraion;
        }        
    }
}

const getOriginals = (allCourses, course) => {
    let original = false;
    for (let c of allCourses) {
        if (c.code === course.code)
        original = true;
    }
    return original;
}

const getAllCourses = () => {
    let allCourses = [];
    for(let applicant of applicants) {
        for(let course of applicant.courses) {
            if(!getOriginals(allCourses, course))
            allCourses.push(course)
        }
    }
    return allCourses;
}

const getCourses = () => {
    let courses = [];
    for(let applicant of applicants) {
        if (applicant.courses.length > 0) {
            courses.push(applicant.courses)
        }
    }
    return courses;
}


const getCourseApplicantsCountByCode = (code) => {
    
    for(let applicant of applicants) {
        let count = 0;
        for(let course of getCourses()) {
            if (course.code === code) {
                count += 1;
            }
        }
        return count;
    }
}




 console.log(getCourseApplicantsCountByCode('WP_6M'));

//console.log(getCourses());