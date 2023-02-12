import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ users }) {
  return (
    <>
     home
    </>
  );
}

/* 
import axios from 'axios';

const Index = props => {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
};

Index.getInitialProps = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');

  return { users: response.data };
};

export default Index;
 */
