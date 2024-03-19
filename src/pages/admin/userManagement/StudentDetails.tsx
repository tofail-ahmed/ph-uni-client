import { useParams } from "react-router-dom"

const StudentDetails = () => {
      const {studentId}=useParams()
  return (
    <div>StudentDetails of {studentId}</div>
  )
}

export default StudentDetails