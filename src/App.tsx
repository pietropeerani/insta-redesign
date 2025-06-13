import Header from "./components/header"
import Navbar from "./components/navbar"
import ProfileCover from "./components/profile-cover"

function App() {

  return (
    <>
     <Header />

     <ProfileCover />

     <div className="super-ellipse"></div>

      <div className="fixed top-0 left-0 -z-20">
        <div className="absolute z-0 top-1/4 left-0 h-full w-full bg-[linear-gradient(#66D3C200,#00504E_37%)]"></div>
        <img src="/cover.png" alt="" />
      </div>

      <Navbar />
    </>
  )
}

export default App
