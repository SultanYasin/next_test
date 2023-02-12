


function userList({ users }) {
  return (
    <main>
      <h2>List of users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <br />
            <p>name :  {user.name} </p>
            <br /> <hr />
            <p>email :  {user.email} </p>
          </div>
        );
      })}
    </main>
  );
}
export default userList;

export async function getStaticProps() {
  const response = fetch("https://jsonplaceholder.typicode.com/users");
  const data = await (await response).json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
