export function shouldCallGetvoteSubjects(state) {
  return !state.hasFetched && !state.isFetching
}

export function isLoading(state) {
  return !!state.hasFetched || state.isFetching
}
