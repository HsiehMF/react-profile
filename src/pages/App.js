import styles from './App.module.scss';
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import WorkDetailPage from './ＷorkDetailPage';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className={styles.App}>
      {/* Header */}
      <header className={styles.header}>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/" className="mx-2">個人簡歷</Navbar.Brand>
              <Nav className="ml-auto">
                  <Nav.Link href="/">自傳</Nav.Link>
                  <Nav.Link href="works">作品集</Nav.Link>
              </Nav>
          </Navbar>
      </header>
      {/* Content */}      
      <content className={styles.content}>
        <Route path="/" component={ HomePage } exact />
        <Route path="/works" component={ WorkPage } exact />
        <Route path="/works/:id" component={ WorkDetailPage } />
      </content>
      {/* Footer */}      
      <footer className={styles.footer} />
    </div>
  );
}

export default App;
