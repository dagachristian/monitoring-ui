import { useEffect } from 'react';

import GlobalLayout from '../../components/layout';
import Flow from '../../components/graph';
import s from '../../services/bffApi/websocket';

import './dashboard.css';

export default function Dashboard() {
  document.title='Dashboard | Monitoring App';
  useEffect(() => {
    // commented out cuz changing websocket.js sets socket to undefined while still open
    if ((!s.socket || s.socket.readyState === WebSocket.CLOSED)) s.initSocket()
    console.log(s.socket)
  }, [])
  return (
    <GlobalLayout>
      <div className='graph-div'>
        <Flow />
      </div>
    </GlobalLayout>
  );
}
