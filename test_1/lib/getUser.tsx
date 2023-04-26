import React from 'react'

export default async function GetUser(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!res.ok) return undefined;

  return res.json();
}
