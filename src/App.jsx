
import './App.css'
import Dislikes from './Components/Dislikes/Dislikes'
import Header from './Components/Header/Header'
import LikesList from './Components/Likes/likesList'
import MyImage from './Components/My Image/MyImage'

function App() {

  return (
    <>
    <div className='self-container'>
    <div className="my-content">
      <Header />
      <LikesList />
      <Dislikes />
    </div>
      <div>
        <MyImage />
      </div>
      </div>
    </>
  )
}

export default App
