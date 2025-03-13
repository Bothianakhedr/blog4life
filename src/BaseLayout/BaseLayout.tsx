import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer.tsx"

type BaseLayoutProps ={
    children:React.ReactNode
}
const BaseLayout = ({children} :BaseLayoutProps) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    
    </>
  )
}

export default BaseLayout