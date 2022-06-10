import Results from './tasks.json'
import { url } from '../components/taskContainer/TaskContainer'

export const GetAllTasks = () => {
  return Results.results
}

export const getAllLabels = async () => {
  const results = await fetch(`${url}results`)
  const allResults = await results.json()
  const categories = allResults.map((element) => element.category)
  return categories
}

export const getAll = async () => {
  const results = await fetch(`${url}results`)
  const allResults = await results.json()
  return allResults
}
