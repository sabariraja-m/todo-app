"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/Button";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session, status } = useSession();
    return (
        <div>
            <Button onClick={signIn} label="Login" />
            {status}
            <br />
            <pre className='text-inverse'>{JSON.stringify(session)}</pre>
        </div>
    );
}
