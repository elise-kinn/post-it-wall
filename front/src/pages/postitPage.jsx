import { useEffect, useState } from "react"
import PostComponent from "../components/postComponent"
import AddPostIt from "../components/addPostIt"

const PostItPage = () => {

    const [ posts, setPosts ] = useState([]) // données
    const [ loading, setLoading ] = useState(true) // état chargement
    const [ error, setError ] = useState(null) // état ereur

    useEffect(() => {
        let isMounted = true // pour éviter setState si composant démonté

        const fetchPostIt = async () => { // AFFICHAGE
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts`) //fetch de l'API
                if(!res.ok) throw new Error('Erreur Réseau') // Gestion des erreurs
                const data = await res.json() // fetch des données
                if(isMounted){
                    setPosts(data)
                    setError(null)
                }
            } catch (error) {
                if(isMounted) setError(error.message)
            }finally{
                if(isMounted) setLoading(false)
            }
        }

        fetchPostIt() // Appel

        return () => { isMounted = false } // clean up si démontage

        // Affiche en fonction des états :
    }, [])
    
    if(loading) return <p>Chargement...</p>
    if(error) return <p>Erreur : {error}</p>

    const deletePost = async (id) => { // SUPPRESSION 
        try {
            const req = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts/${id}`, { method: 'DELETE'})
            if(!req.ok) return new Error('Impossible de supprimer la tâche')
            setPosts(prev => prev.filter(el => el._id !== id)) // Mettre à jour l'array posts pour supprimer le post it correspondant à l'id
            
        } catch (error) {
            setError(error.message)
        }
    }

    const addPost = async (content, color) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts`, { 
                method: 'POST',
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify({ content, color })
            })
            if(!req.ok) throw new Error("Ajout de post-it impossible")

            const res = await req.json()
            setPosts(prev => [...prev, res.newPost])
            
        } catch (error) {
            setError(error.message)
        }
    }

    const editPost = async (id, content, color) => {
        try {
            const req = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/posts/${id}`, { 
                method: 'PATCH',
                headers: { "Content-type": "application/json"},
                body: JSON.stringify({ content, color })
            })
            if(!req.ok) throw new Error('Impossible de mettre à jour la note')
            const res = await req.json()
            setPosts(prev => prev.map(el => el._id === id ? res.post : el))
        } catch (error) {
            setError(error.message)
        }
    }


    return(
        <>
        <h1>Post-ITs</h1>

        <AddPostIt add={addPost}/>
        <h2>Mon mur</h2>
        <ul>
            {posts.map(el =>( 
                <PostComponent 
                    content={el.content}
                    _id={el._id}
                    color={el.color}
                    key={el._id}
                    onDelete={() => deletePost(el._id)}
                    onEdit={editPost}
                />
            ))}
        </ul>
        </>
    )
}

export default PostItPage