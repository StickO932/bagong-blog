import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      {/* ❗ IF splash page → no container */}
      {location.pathname === '/' ? (
        <SplashPage />
      ) : (
        <div className="main-container">
          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/posts/:id' element={<PostPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route path='/profile'
              element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
            />
            <Route path='/create-post'
              element={<ProtectedRoute><CreatePostPage /></ProtectedRoute>}
            />
            <Route path='/edit-post/:id'
              element={<ProtectedRoute><EditPostPage /></ProtectedRoute>}
            />

            <Route path='/admin'
              element={
                <ProtectedRoute role='admin'>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      )}

      <footer className="footer">© 2026 TheFolio</footer>
    </>
  );
}