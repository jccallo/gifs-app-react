import { useState } from "react"

export const CategoryForm = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("")

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Buscar..."
              value={inputValue}
              onChange={onInputChange}
            />
          </form>
        </div>
      </div>
    </>
  )
}
