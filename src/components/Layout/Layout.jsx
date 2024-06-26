import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Routers from './../../routers/Routers';

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout