import Link from "next/link";

const getTickets = async () => {

    // Delay imitation
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch("http://localhost:4000/tickets",{
        next: {
            revalidate: 0 // use 0 to cancel cache usage
        }
    })

    return res.json()
}

const TicketsList = async () => {
    const tickets = await getTickets()
    return (
        <>
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets! :)</p>
            )}
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)} ...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                    </Link>
                </div>
            ))}

        </>
    );
};

export default TicketsList;