import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './component/AppContent';
import AppHeader from './component/AppHeader';
import PageTitle from './component/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
