import { useState } from "react"

const AddPostIt = ({ add }) => {

    const colorOptions = [ 
        ["Jaune", "#E3DBB3"],
        ["Rose", "#E3B3D2"],
        ["Bleu", "#9DC7D4"],
        ["Vert", "#ADD9B4"]
    ]
    const [ selected, setSelected ] = useState(colorOptions[0][1]) // Affiche de cochage
    const [ content, setContent ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!content.trim()) return
        add(content, selected)
        setContent('')
    }

    return(
        <>
        <h2>Ajouter un post-it</h2>
        <form onSubmit={handleSubmit} id="add">
            <input 
                type="text" 
                placeholder="Que dire..."
                onChange={el => setContent(el.target.value)}
                value={content}
            />
            <div>
                {colorOptions.map((opt, i) => (
                    <label key={i}>
                        <input 
                            type="radio" 
                            name="color"
                            value={opt[1]}
                            checked={selected === opt[1]}
                            onChange={() => setSelected(opt[1])}
                        />
                        {opt[0]}
                    </label>
                ))}
            </div>
            <button type='submit'>Coller mon post-it</button>
        </form>
        </>
    )
}

export default AddPostIt