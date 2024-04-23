import React, { useEffect, useState } from "react";

function SampleApp() {
  const [state, setState] = useState(1);
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  // Tujuan menggunakan use effect
  /*
  1. Untuk Merubah default value ke target value yang dijalankan pertama kali
  2. Untuk merubah dan mererender komponent react dengan mewatch dependencinya

  */

  useEffect(() => {
    setState(2);
  }, []); // 1. tanpa cleanup

  useEffect(() => {
    const id = setInterval(() => {
      setState((prevData) => prevData + 1);
    }, 1000); // miliseconds
    return () => {
      clearInterval(id);
    };
  }, []); // 2. dengan cleanup function

  useEffect(() => {
    if (name) {
      setCounter((prev) => prev + 1);
    }
  }, [name, state]); // 3. dengan dependencies

  useEffect(() => {
    const asyncFunc = () => {
      fetch("https://randomuser.me/api/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUsers(data.results);
        })
        .catch((err) => {
          alert(err?.message || "Error!");
        });
    };
    asyncFunc();
  }, []); // 4. Menggunakan api

  return (
    <>
      <div>State: {state}</div>
      <div>Counter: {counter}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      {users?.map((user, index) => (
        <div key={index}>
          {user.name.title} {user.name.first} {user.name.last}
        </div>
      ))}
    </>
  );
}

export default SampleApp;
