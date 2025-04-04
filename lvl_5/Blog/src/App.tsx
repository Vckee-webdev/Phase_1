import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;