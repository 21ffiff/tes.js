import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
    const costumers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
            breadcrumbs={[
                { label: 'Invoices', href: '/dashboard/invoice'},
                { 
                    label: 'Create Invoice',
                    href: '/dashboard/invoice/create',
                    active:true
                },
            ]}
            />
            <Form customers={costumers} />
        </main>
    )
}