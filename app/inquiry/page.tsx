'use client'
import dynamic from 'next/dynamic';
import { FormEvent, useState } from 'react';
// import Modal from './Modal';

const DynamicModal = dynamic(() => import('./Modal'), { ssr: false });

const Page = () => {
    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    const submission = async (event: FormEvent) => {
        event.preventDefault()
        const PocketBase = (await (import('pocketbase'))).default;
        const pb = new PocketBase("http://127.0.0.1:8090")
        const formData = new FormData()
        formData.append('name', name)
        const createdRecord = await pb.collection('inquiries').create(formData);
        handleButtonClick()
    }

    return (
        <main>
            <form onSubmit={submission} className='flex flex-col items-center justify-start mt-8'>
                <input className='border-2 rounded bg-white focus:bg-blue-100' type='text' placeholder='Your Name' onChange={(e) => setName(e.target.value)}></input>
                <input className='border-2 rounded bg-white focus:bg-blue-100' type='submit' />
            </form>
            {isModalOpen && <DynamicModal onClose={handleCloseModal} />}
        </main>
    )
}

export default Page