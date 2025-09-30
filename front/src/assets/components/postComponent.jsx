import { useState } from "react"

const PostComponent = ({ _id, content, color, onDelete, onEdit }) => {

    const colorOptions = [ 
        ["Jaune", "#E3DBB3"],
        ["Rose", "#E3B3D2"],
        ["Bleu", "#9DC7D4"],
        ["Vert", "#ADD9B4"]
    ]

    const [ isEditing, setIsEditing ] = useState(false)
    const [ newContent, setNewContent ] = useState(content)
    const [ newColor, setNewColor ] = useState(color)

    // Bouton Save 
    const handleSave = () => {
        onEdit(_id, newContent, newColor)
        setIsEditing(false)
    }

    return(
        <li className="post-it" style={{ backgroundColor: color }}>
            {isEditing ? (

                <div id="edit">
                <input 
                    type="text" 
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />

                <div className="radio">
                    {colorOptions.map(([label, hex]) => (
                        <label key={hex}>
                            <input
                            type="radio"
                            name={`color-${_id}`}    
                            value={hex}
                            checked={newColor === hex}
                            onChange={() => setNewColor(hex)}
                            />
                            {label}
                        </label>
                    ))}
                </div>
                <div className="button">
                    <button onClick={() => setIsEditing(false)}>Annuler</button>
                    <button onClick={handleSave}>Sauvegarder</button>
                </div>

                </div>

            ):(
                <>
                <div style={{ backgroundColor: color }}><span onClick={onDelete}>X</span></div>
                <p>{content}</p>
                <p className="edit" onClick={() => setIsEditing(true)} >Modifier</p>
                </>
            )}
        </li>
    )
}

export default PostComponent