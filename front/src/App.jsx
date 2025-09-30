import { Route, Routes } from 'react-router-dom'
import PostItPage from './assets/pages/postitPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostItPage />} />
    </Routes>
  )
}

export default App
