'use client'

import Image from 'next/image'
import Logo from './assets/star-wars-logo.png'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useChat } from 'ai/react'
import LoadingBubble from './components/LoadingBubble'
import PromptSuggestionRow from './components/PromptSuggestionRow'
import { Message } from 'ai'
import Bubble from './components/Bubble'

const Home = () => {

    const { append, isLoading, messages, input, handleInputChange, handleSubmit } = useChat()

    const noMessages = !messages || messages.length === 0;
    const router = useRouter();

    const handlePrompt = (prompt) => {
        console.log(prompt)
        const msg: Message = {
            id: crypto.randomUUID(),
            content: prompt,
            role: 'user'
        }
        append(msg)
    }

  return (
    <main>
        <Image 
            src={Logo}
            height={75}
            alt='Logo'   
        />
           
        <section className={ noMessages ? "" : 'populated'}>
            {noMessages ? (
                <>
                    <p className='starter-text'>
                        The ultimate place or star wars super fans. Whether you&apos;re a seasoned Jedi Master, an eager Padawan, or just starting your journey into the Star Wars universe, 
                        I&apos;m here to help. From exploring the intricate lore and characters to sharing fun facts and answering your burning 
                        questions, this chatbot is designed to immerse you in all things Star Wars.
                    </p>
                    <br />
                    <PromptSuggestionRow onPromptClick={handlePrompt}/>
                </>
            ) : (
                <>
                    {messages.map((message, index) => (
                        <Bubble message={message} key={`message-${index}`}/>
                    ))}
                    {isLoading && <LoadingBubble /> }
                </>
            )}
        </section>

        <form onSubmit={handleSubmit}>
            <input className='question-box' type="text" onChange={handleInputChange} value={input} placeholder='Ask me something'/>
            <input type="submit" />
        </form>
    </main>
  )
}

export default Home