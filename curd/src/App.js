import React from 'react'
import Home from './Home'
import View from './View'
import AddDetails from './AddDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/AddDetails"} element={<AddDetails />} />
          <Route path={"/update/:id"} element={<AddDetails />} />
          <Route path={"/View/:id"} element={<View />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App