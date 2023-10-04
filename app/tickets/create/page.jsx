import NewTicketForm from "@/app/tickets/create/NewTicketForm";


const CreateTicket = () => {
    return (
        <main>
            <h2 className="text-primary text-center">Add a new ticket</h2>
            < NewTicketForm />
        </main>
    );
};

export default CreateTicket;