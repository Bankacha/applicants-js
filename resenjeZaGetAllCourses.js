const alreadyIncludedCourseByCourseCode = (allCourses, course) => {
    let included = false;
  
    for (let c of allCourses) {
      if (c.code === course.code) {
        included = true;
      }
    }
  
    return included;
  };
  
  const getAllCourses = () => {
    let allCourses = [];
    for (let aplicant of applicants) {
      for (let course of aplicant.courses) {
        if (!alreadyIncludedCourseByCourseCode(allCourses, course)) {
          allCourses.push(course);
        }
      }
    }
  
    return allCourses;
  };
  
  console.log(getAllCourses());
  