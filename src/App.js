import React, { useState, useEffect } from 'react';
import './style.css';
import jsxToString from 'jsx-to-string';
import { Table } from 'antd';

console.log(jsxToString(<App />));

console.log(jsxToString(<span>嘿喽</span>));

export default function App() {
  const [table, setTable] = useState('');
  const [table2, setTable2] = useState('');
  useEffect(() => {
    setTable(jsxToString(<Table />));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      // 手动添加 displayName 可解决 [object Object] 的问题
      Table.displayName = 'Table';
      setTable2(jsxToString(<Table />));
    }, 0);
  }, []);
  return (
    <div>
      <pre>{table}</pre>
      <pre>{table2}</pre>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
