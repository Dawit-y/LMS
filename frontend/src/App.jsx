import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/users");
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {users?.map((user) => (
        <div className="text-xl" key={user.id}>
          {user.firstName}
        </div>
      ))}
    </>
  );
}

export default App;
