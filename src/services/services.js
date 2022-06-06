import Results from './tasks.json'

export const GetAllTasks = () => {
  return Results.results
}

export const getAllLabels = () => {
  return Results.labels
}

export default async function GetTasksFromApi() {
  const ApiResult = await fetch(
    'https://629df86a3dda090f3c107c4d.mockapi.io/results'
  )
  const Results = ApiResult.json()
  return Results
}
