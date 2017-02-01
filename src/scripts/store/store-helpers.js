export const getErrorFromErrorResponse = (error, defaultError) => {
    return error.response && error.response.data ? error.response.data.err : defaultError
}
