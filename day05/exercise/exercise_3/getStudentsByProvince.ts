import studentData from '../student.json';
function getStudentsByProvince(data: any[], province: string): any[]{
  return data.filter(data => {
    return data.address.province === province;
  })
}

console.log(getStudentsByProvince(studentData, "Santa Fe"));