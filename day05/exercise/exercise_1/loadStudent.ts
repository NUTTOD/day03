import studentData from '../student.json';
function loadStudent(data: any[]): number{
  return data.length;
}
console.log(loadStudent(studentData));