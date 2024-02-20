import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi"

const AcademicSemester = () => {
  const {data}=useGetAllSemestersQuery()
  console.log(data)
  return (
    <div>AcademicSemester</div>
  )
}

export default AcademicSemester