export default (initialState, handlers) => (
    (state = initialState, action) => (
      handlers.hasOwnProperty(action.type) ? handlers[action.type](action, state) : state
    )
  )