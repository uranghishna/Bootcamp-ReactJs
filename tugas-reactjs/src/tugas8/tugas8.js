import React from 'react';
import './tugas8.css'

function tugas8(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div class="react">
      <h1>Data diri peserta kelas Reactjs</h1>
      <div className="garis"></div>
      <ul className="peserta">
        <li>Nama Lengkap: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Batch: {props.batch}</li>
      </ul>
    </div>
      </header>
    </div>
  );
}

export default tugas8;