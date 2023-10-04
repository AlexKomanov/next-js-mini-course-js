"use client"

import {useRouter} from "next/navigation";
import {useState} from "react";

const NewTicketForm = () => {

    const router = useRouter()

    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const ticket = {
            title, body, priority, user_email: email
        }

        const res = await fetch('http://localhost:4000/tickets', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201) {
            router.refresh()
            router.push('/tickets')
        }
    }

    return (
        <form className="w-1/2" onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input
                required
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                />
            </label>
            <label>
                <span>Email:</span>
                <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Description:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
                <button className="btn-primary" disabled={isLoading}>
                    {
                        isLoading ?
                            <span>Adding...</span> :
                            <span>Submit Ticket</span>

                    }
                </button>
            </label>

        </form>
    );
};

export default NewTicketForm;