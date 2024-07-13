import React from 'react'
import PromptSuggestion from './PromptSuggestion'

const PromptSuggestionRow = ({ onPromptClick }) => {
    const prompts = [
        'Who was Luke Skywalker',
        "Where is Loopy Land?",
        "Who is Esmeraldo"
    ]
  return (
    <div>
        {prompts.map((prompt, _index) => (
            <PromptSuggestion key={_index} text={prompt} onClick={() => onPromptClick(prompt)}/>
        ))}
    </div>
  )
}

export default PromptSuggestionRow