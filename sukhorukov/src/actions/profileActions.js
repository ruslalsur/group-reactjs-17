export const PROFILE_GET = 'PROFILE_GET'
export const PROFILE_CHANGE = 'PROFILE_CHANGE'

export const profileGetAction = () => ({
    type: PROFILE_GET
})

export const profileChangeAction = (name) => ({
    type: PROFILE_CHANGE,
    name
})
