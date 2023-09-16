import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {

  return (
    <>
      <h5 className="pb-10 text-5xl font-bold text-center">Course Registration</h5>
      <div className="flex justify-between gap-6 container mx-auto">
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>

    </>
  )
}

export default App
