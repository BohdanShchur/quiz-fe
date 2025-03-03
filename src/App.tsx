import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import QuizWrapper from './components/QuizWrapper'
import Languages from './routes/Languages'
import Gender from './routes/Gender'
import Age from './routes/Age'
import Hates from './routes/Hates'
import Favorites from './routes/Favorites'
import Email from './routes/Email'
import ThankYou from './routes/ThankYou'
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/quiz" element={<QuizWrapper />}>
            <Route path="languages" element={ <Languages />} />
            <Route path="gender" element={ <Gender />} />
            <Route path="age" element={ <Age />} />
            <Route path="hates" element={ <Hates />} />
            <Route path="favorites" element={ <Favorites />} />
          </Route>
          <Route path="/submit-form" element={<Email />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
