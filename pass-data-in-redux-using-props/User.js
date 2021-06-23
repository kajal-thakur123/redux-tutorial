import React from 'react';

const User = (props) => {

   const { data } = props
  
   return (
      <div>
         <h1>User page</h1>
         <h1>{data.name}</h1>
         <h2>{data.age}</h2>
         <h2>{data.email}</h2>
      </div>
   )
}

export default User;
