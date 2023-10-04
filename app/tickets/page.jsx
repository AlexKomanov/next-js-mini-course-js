import React, {Suspense} from 'react';
import TicketsList from "@/app/tickets/TicketsList";
import Loading from "@/app/loading";

const Tickets = () => {
    return (
        <main>
            <nav>
                <h2>Tickets</h2>
                <p><small>Currently open tickets.</small></p>
            </nav>

            <Suspense fallback={<Loading />}>
                <TicketsList/>
            </Suspense>
        </main>
    );
};

export default Tickets;