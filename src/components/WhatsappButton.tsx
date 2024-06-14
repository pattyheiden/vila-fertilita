'use client'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Loading from '@/components/Loading'
import { useState } from 'react';


export function WhatsappButton() {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 1000);
    return (
        <>
            {
                isLoading ? <Loading /> : (
                    <>
                        <div className='absolute'>
                            <FloatingWhatsApp
                                accountName='Vila Fertilitá'
                                phoneNumber='554788074437'
                                chatMessage='Olá, como podemos ajudá-lo(a)?'
                                statusMessage='Responde dentro de 1 hora'
                                placeholder='Escrever mensagem'
                                avatar='/whatsappLogo.jpeg'
                                darkMode                              
                            />
                        </div></>
                )
            }</>

    )
}