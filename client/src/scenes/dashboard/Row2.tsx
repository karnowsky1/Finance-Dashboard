import { useGetProductsQuery } from "../../state/api"
import DashboardBox from "../../components/DashboardBox"

const Row2 = (props: Props) => {
  const { data } = useGetProductsQuery()
  console.log("* - Row2 - data:", data)

  return (
    <>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="e"></DashboardBox>
      <DashboardBox gridArea="f"></DashboardBox>  
    </>
  )
} 

export default Row2