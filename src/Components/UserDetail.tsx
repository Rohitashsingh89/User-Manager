import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Define a type for the user data
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}

const UserDetail: React.FC = () => {
  // Use the useParams hook to extract the id from the URL
  const { id } = useParams<{ id: string }>(); // Specify the type for the params
  const [user, setUser] = useState<User | null>(null); // Set user state to User type or null

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details", error);
      }
    };
    fetchUser();
  }, [id]);

  if (!user) return <div className="text-center py-6">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg mt-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">{user.name}</h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-bold">Email: </span>
          {user.email}
        </p>
        <p>
          <span className="font-bold">Phone: </span>
          {user.phone}
        </p>
        <p>
          <span className="font-bold">Address: </span>
          {user.address.street}, {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
