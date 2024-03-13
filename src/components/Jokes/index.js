import {useState, useEffect} from 'react'
import './index.css'

const Jokes = () => {
  const [jokes, setJokes] = useState([])

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
      )
      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setJokes(
        data.jokes.map((jokeObj, index) => ({id: index, joke: jokeObj.joke})),
      )
    } catch (error) {
      console.error('Error fetching jokes:', error)
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
    <div className="jokes-container">
      <h1 className="jokes-heading">Jokes</h1>
      <table className="table jokes-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map(joke => (
            <tr key={joke.id}>
              <td>{joke.id + 1}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Jokes
