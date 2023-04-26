import React from 'react';
import { Suspense } from 'react';
import GetUser from '@/lib/getUser';
import GetUserPosts from '@/lib/getUserPosts';
import GetAllUsers from '@/lib/getAllUsers';
import UserPosts from './components/UserPosts';
import type { Metadata } from 'next';
import { notFound } from  'next/navigation';


type Params = {
    params: {
        userId: string;
    }
}

export async function generateMetadata({params: { userId }}: Params): Promise<Metadata> {
    const userData: Promise<User> = GetUser(userId);
    const user: User = await userData;

    if (!user) {
        return {
            title: 'User Not Found'
        }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({params: { userId }}: Params) {
    const userData: Promise<User> = GetUser(userId);
    const userpostsData: Promise<Post[]> = GetUserPosts(userId);

    //const [user, userPosts] = await Promise.all([userData, userpostsData])

    const user = await userData;

    if (!user) return notFound();
  return (
    <div>
        <h2>{user.name}</h2>
        <br />
        <Suspense fallback={<h2>Loading...</h2>}>
            {/* @ts-expect-error Server Component */}
            <UserPosts promise={userpostsData} />
        </Suspense>
    </div>
  )
}

export async function generateStaticParams() {
    const usersData: Promise<User[]> = GetAllUsers();
    const users = await usersData;

    return users.map((user) => ({
        userId: user.id.toString() 
    }));
}