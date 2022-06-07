import Results from './tasks.json'
import { url } from '../components/taskContainer/TaskContainer'
import { elementAcceptingRef } from '@mui/utils'

export const GetAllTasks = () => {
  return Results.results
}

export const getAllLabels = async () => {
  const results = await fetch(`${url}results`)
  const allResults = await results.json()
  const categories = allResults.map((element) => element.category)
  return categories
}
