import React from "react"

const TodoInput = ({onClick})=>{
    const [text,setText] = React.useState("");
    const handleAdd=()=>{
        const payload={
            title:text,
            status:false
        }
        onClick(payload)
        setText("")
    }
    return(
        <div>
            <h1>
                Add TODO
            </h1>
            <input value={text} onChange={e=>setText(e.target.value)}
            placeholder="add task"/>
            <button onClick={handleAdd}>
                ADD
            </button>
        </div>
    )
}

export {TodoInput}